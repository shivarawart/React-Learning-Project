import React from 'react'
import { useDispatch } from 'react-redux';
import authServices from '../../appwrite/config.js';
import { logout } from '../../store/authSclice.js';

function LogoutBtn(){
    const dispatch = useDispatch()
    const LogoutHandler = () =>{
        authServices.logout().then(() => {
            dispatch(logout())
        })
}
    return(
        <button>Logout</button>
    )
}

export default LogoutBtn
