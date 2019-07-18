import React, { useEffect, useState } from 'react';
import axios from 'axios';

function FriendsList({ history }) {
    
  const [friends, setFriends] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(token) {
            axios
                .get('http://localhost:5000/api/friends', {
                  headers: {
                    authorization: `${token}`
                  }
                })
                .then(res => {
                    console.log(res);
                    setFriends(res.data)
                })
                .catch(err => console.log(err))
        }
    }, [])

    const logout = () => {
        localStorage.removeItem('token');
        history.push('/')
    }

    return(
        <div>
            <h1>Friends List</h1>
            {friends.map(friend => 
                <div key={friend.email}>
                    <h3>Name: {friend.name}</h3>
                    <h4>Age: {friend.age}</h4>
                    <h4>email: {friend.email}</h4>
                </div>
            )}
            <button 
                onClick={() => logout()}>Logout
            </button>
        </div>
    )
}

export default FriendsList