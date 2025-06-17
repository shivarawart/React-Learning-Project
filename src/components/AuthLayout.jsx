import React,{useState,useEffect} from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
export default function AuthLayout({children},authenicattion = true) {

    const navigate = useNavigate()
    const[loader,setLoader] = useState(true);
    const authStates = useSelector(state => state.auth.status)
    useEffect( () =>{
       if(authentication && authStatus !== authentication){
        navigate("/Login")
 
       }else if(!authentication && authStates !== authenicattion){
       navigate('/')
        setLoader(false)

       }
    },[authStates,navigate,authentication])

  return (
    <div>
      AuthLayout
    </div>
  )
}

