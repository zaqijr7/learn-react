import React from 'react';
import { NavLink } from 'react-router-dom';

function Login(){
    return(

            <div className='d-flex justify-content-center align-items-center vh-100 vw-100 bg-dark'>
                
                    <div className='col-md-4'>
                        <div className='text-center text-light mb-4'>
                            Go to <NavLink to='/'> <span class="badge fas fa-home"></span> Home</NavLink>
                        </div>
                        <div className='card'>
                            <div className='card-header'>
                                Login
                            </div>
                            <div className='card-body'>
                                <form>
                                    <div className='mb-3'>
                                        <label className='form-label' for='username'>Email/Username</label>
                                        <input type='text' className='form-control' id='username'/>
                                    </div>
                                    <div className='mb-3'>
                                        <label className='form-label' for='password'>Password</label>
                                        <input type='pass' className='form-control' id='password'/>
                                    </div>
                                    <div className='mb-3 d-grid'>
                                        <button className='btn btn-primary btn-block'>Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
               
            </div>

    )
}

export default Login;