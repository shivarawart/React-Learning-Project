import React, { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import { Header,Footer } from './components/index.js';

import {} from './store/authSclice.js/'
import { logout } from './store/authSclice.js';

const App = () => {
const[loading,setLoadong] = useState[true];
const dispatch = useDispatch()

useEffect[() =>{
  authService.getCurrentUser()
  .then((userData) =>{  
    if(userData){
dispatch(login({userdata}))
    }else{
      dispatch(logout())
    }
  })
  .finally(()=> setLoadong(false))

}, []]

    console.log(import.meta.env.VITE_APPWRITE_uRL);
  return (
 <div> test
  <div>
    <Header />
<main>
  {
 todo   /* <outlet /> */
  }
</main>
    <Footer />
  </div>
 </div>

  )
}

export default App
