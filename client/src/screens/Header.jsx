import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../components/shared/Navbar.jsx'
import ChangePassword from '../screens/ChangePassword'



const authenticatedOptions = (
  <div className="links">
    <NavLink className='link-div' to="/">Home</NavLink>
    <NavLink className='link-div' to='/items'>Items</NavLink>
    <NavLink className='link-div' to='/create'>Create Item</NavLink>
    <NavLink className='link-div' to="/change-password">Change Password</NavLink>
    <NavLink className='link-div' to="/sign-out">Sign Out</NavLink>
  </div>
)

const unauthenticatedOptions = (
  <div className="links" >
    <NavLink className='singInUp' to="/sign-up">Sign Up</NavLink>
    <NavLink className='singInUp' to="/sign-in">Sign In</NavLink>
  </div>
)


const Header = ({ user, menuIconOnClick, active }) => (
  <>
    <Navbar id='navbar'>
      {user && <span className="navbar-text">Welcome, {user.username} </span>}
      <div className="nav">
        <>
          {user ?
            <div className='hamburger-container' id='right-margin' onClick={(e) => menuIconOnClick(e)}>
              <div className='bar1'></div>
              <div className='bar2'></div>
              <div className='bar3'></div>
            </div>
            : unauthenticatedOptions}
        </>
      </div>
    </Navbar>
    <div className='link-div'>
      {user && active ? authenticatedOptions : null}
    </div>
  </>
)

export default Header