import { Button } from '@material-ui/core';
import React, { useEffect } from 'react'
import { useLocation, useParams, useSearchParams } from 'react-router-dom'

const Profile = () => {
    const location = useLocation();
    const params = useParams();
     const { item } = location.state
   
    return (
        <div>
            <p>name : {item.name}</p>
            <p>email : {item.email}</p>
            <p>gender :{item.gender}</p>
            <p>status :{item.status}</p>
        </div>
    )
}

export default Profile