import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../axiosAuth'

import AddFriend from './AddFriend'

function FriendsList(props) {
    
  const [friends, setFriends] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(token) {
            axiosWithAuth()
                .get('http://localhost:5000/api/friends')
                .then(res => {
                    console.log(res);
                    setFriends(res.data)
                })
                .catch(err => console.log(err))
        }
    }, [ friends ])

    const logout = () => {
        localStorage.removeItem('token');
        props.history.push('/')
    }

    console.log('name', props)

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
            <AddFriend />
        </div>
    )
}

export default FriendsList