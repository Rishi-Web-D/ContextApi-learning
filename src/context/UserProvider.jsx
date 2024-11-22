import React, { useEffect, useState } from 'react'
import userContext from './userContext'


const UserProvider = ({children}) => {
  const [user, setUser] = useState({
    name : "Rishi Sharma"
  })
  useEffect(() => {
    setTimeout(()=>{
      setUser({
        name : "Ankit"
      })
    },1000)
  }, [])
  
  return (
    <userContext.Provider value={user}>
      {children}
    </userContext.Provider>
  )
}

export default UserProvider