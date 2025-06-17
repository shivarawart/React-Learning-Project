import React,{useState} from 'react';
import authServices from '../../appwrite/auth.js';
import { useForm } from 'react-hook-form';
import { Link,useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authLogin,Login } from '../../store/authSclice.js';
import { Button, Input, Logo } from '../index.js';



function Signup () {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState("");
    const signup = async(data)=>{
        setError("");
           
        try {
               const userData = await authServices.createAccount(data.email, data.password, data.name);
               if(userData){
                const userData = authServices.getCreateUser();
                
                if(userData){
                    dispatch(authLogin(userData));
                    navigate("/");
                } else {
                    setError("Failed to retrieve user data after signup.");
                }
               }



            } catch (error) {
                setError(error.message);
                
            }
        
    }
  return (
    <div className='flex items-center justify-center w-full'>
        <div className={'mx-auto w-full max-w-lg bg-gray-300 p-10 rounded-xl border border-black/10'}>
            <span className=''>
            <Logo width="100%" />
            </span>
            <h2 className=''>Create a new account</h2>
            <p className="">Already have an account?
            <Link to="/login" className="">Sign in</Link>
            </p>
            {error && <p className="text-red-500">{error}</p>}


            <form onSubmit={handleSubmit(signup)} className=''>
            <div className=''>
                <Input className=''
                label="Name:"
                placeholder='Enter your name'
                type='text'
                {...register("name", {
                    required: true,
                    minLength: 3,
                })}
                />
            </div>
            <div className=''>
                <Input className=''
                label="Email:"
                placeholder='Enter your email'
                type='email'
                {...register("email", {
                    required: true,
                    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                })}
                />
                
            </div>
            <div className=''>
                <Input className=''
                label="Password:"
                placeholder='Enter your password'
                type='password'
                {...register("password", {
                    required: true,
                    minLength: 6,
                })}
                />
            </div>
            <Button type="submit" className='w-full bg-blue-500 text-white'>Sign Up</Button>
            </form>
        </div>
      
    </div>
  )
}

export default Signup
