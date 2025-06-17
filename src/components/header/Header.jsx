import React from 'react'
import {Container,Logo,LogoutBtn} from '../index.js';
import { useSelector } from 'react-redux';
 import { useNavigate } from 'react-router-dom';
import { login } from '../../store/authSclice.js';

function Header () {
  const authStatus = useSelector((state)=>state.auth.status)
  const navigate  = useNavigate()
  const NavItems =[
    {
        name: "Home",
        slug : "/",
        active:true,
    },
    {
      name :"login",
      slug:"/login",
      active: !authStatus,
    },
    {
      name:"signup",
      slug:"/signup",
      active: !authStatus,
    },
    {
      name :"All Psts",
      slug :"/all-posts",
      active : "authStatus",
    },
    {
      name : "Add Posts",
      slug :"/add-posts",
      active : authStatus,
    }

  ]
  return (
  <header className=''>
    <Container>
      <nav>
        <div>
          <Link to="/">
          Logo</Link>
        </div>
        <ul>
          {
            NavItems.map((item) =>{
              item.active ? (
                <li key ={ item.name}>
                  <button onClick={() => navigate(item.slug)} className=''>{item.name}</button>

                </li>
              ) : null
            })
          }
          {
            authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )
          }
        </ul>
      </nav>
    </Container>
  </header>
  )
}

export default Header
