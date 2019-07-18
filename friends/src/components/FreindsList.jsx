import React, { useEffect, useState } from 'react';
import axios from 'axios';

function FriendsList() {
    
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

    return(
        <div>
            <p>Friends List</p>
            {friends.map(friend => 
                <div key={friend.email}>
                    <h3>Name: {friend.name}</h3>
                    <h4>Age: {friend.age}</h4>
                    <h4>email: {friend.email}</h4>
                </div>
            )}
        </div>
    )
}

export default FriendsList