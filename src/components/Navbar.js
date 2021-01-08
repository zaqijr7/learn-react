import React from "react";
import { NavLink } from "react-router-dom";

function Navbar({children}){
    return(
           <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
                    <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">Navbar</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink exact className="nav-link" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact className="nav-link" to="/users">Users</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact className="nav-link" to="/login">Login</NavLink>
                        </li>
                        </ul>
                    </div>
                    </div>
                </nav>
                <div className='p-5'>
                    {children}
                </div>
           </div>    
        )
}
export default Navbar;