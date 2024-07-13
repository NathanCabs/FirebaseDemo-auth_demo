import { NavLink} from 'react-router-dom'
import React, {useContext} from 'react';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom'
import {logout} from "../services/authService";

export default function Navbar() {
    const {user} = useContext(UserContext);
    const navigate = useNavigate()

    const handleLogout = async () =>  {
        await logout();
        navigate('/login')
      }

    return (
        <nav>
          <h1>My Articles</h1>          
          {user && (
              <>
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/about">About</NavLink>
                  <NavLink to="/contact">Contact</NavLink>
                  <NavLink to="/new">New Article</NavLink>
              </>
          )}
          {!user && (
            <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Signup</NavLink>
            </>
          )
          
          }          

          {user && (
              <>
              hello, {user.displayName}
              <button className="btn" onClick={handleLogout}>Logout</button>
              </>
          )}

        </nav>    
    )
}
