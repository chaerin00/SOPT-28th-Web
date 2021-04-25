import React from 'react';

const UserCard=({userData})=>{
    console.log("card",userData);
    return(
        userData && (
            <div>
            <h1>{userData.data.name}</h1>
            <h1>{userData.data.bio}</h1>
            <h1>{userData.data.following}</h1>
            <h1>{userData.data.follower}</h1>
        </div>
        )
    )
}

export default UserCard;
