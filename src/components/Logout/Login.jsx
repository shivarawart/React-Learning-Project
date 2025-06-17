import React,{usestate}from 'react'
import {link, useNavigate} from 'react-router-dom';
import { login as authLogin  } from '../../store/authSclice.js';
import {Button, Input,Logo} from '../index.js';
import { useDispatch } from 'react-redux';
import authservice from '../../appwrite/auth.js'
import {useform} from 'react-hook-form';
import authServices from '../../appwrite/auth.js';

function Login(){
    const navigate = useNavigate()
    const diapatch  = useDispatch()
    const {regester,handleSubmit} = useState(false)
    const {error,setError} = usestate("")
    const login = async(data) =>{
      setError("")
      try {
         const session =  await authServices.login(data)
         if(session){
         const session =  await authServices.login(data)
         getCurrentUser()
         if(userData) dispatch(authLogin(userData))
            navigate("/")
         }
      } catch (error) {
        setError(error.message)
      }
    }
  return (
    <div className='flex items-center justify-center w-full'>
      <div className={'mx-auto w-full max-w-lg bg-gray-300 p-10 rounded-xl border border-black/10'}></div>
      
        <div>
          <span className=''>
          <Logo width = "100%"/>
          
       </span> 
       </div>
       <h2 className=''>sign in to your account </h2>
       <p classsName="">Don&pos;t have any acount
         <link to="/signup" className="">sign up
       </link>
       </p>
       { error && <p className=""> {error}</p>}
       <form onSubmit={handleSubmit(login)} className=''>
        <div className=''>
          <Input className=''
          label="Email:"
          placeholder='Enter your email'
          type='email' 
            { ...regester("email",{
              required:true,
              validate:{
                matchPattern:(value) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) || 
                "Email adress must  be valid adress",

              }

            })}
            />
          <Input className='' 
          label="Password:"
          placeholder='Enter your password'
          type='password'
          {...regester("password",{
            required :true,
            validatate:{
              mstchPattern:(value) =>{
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(value) || 
                "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number."
            }

            }
          })}
          />
            <Button className='w-full bg-blue-500 text-white hover:bg-blue-600'>
              Sign In
            </Button>
        </div>
       </form>

    </div>
  )
}

export default Login
