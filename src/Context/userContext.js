import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const UserContext = createContext(null)
const ContextWrapper = ({children}) => {
    const [user, setUser] = useState(null)
    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('token'))
        if (token) {
            axios({
                baseURL : `${process.env.REACT_APP_URL_BACKEND}`,
                method : 'GET',
                url : '/v2/users/details',
                headers : {
                    'Authorization' : `Bearer ${token}`
                }
            }).then((res) => {
                const [result] = res.data.data
                setUser(result)
            }).catch((err) => {
                console.log(err)
            })
        }
    }, [])

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default ContextWrapper