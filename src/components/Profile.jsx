import React, { useContext } from 'react'
import userContext from '../context/userContext'

const Profile = () => {
    const user = useContext(userContext)
  return (
    <div className='text-2xl'>
        
        <h1>Profile</h1>
        <h1>{user?.name}</h1>

    </div>
  )
}

export default Profile