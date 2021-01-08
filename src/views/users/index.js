import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

function UsersIndex(){
const [user, setUser] = useState([]);
const getUser = async () => {
    try{
        let response = await axios.get('https://jsonplaceholder.typicode.com/users')
        setUser(response.data);
    }catch(e){
        console.log(e.message);
    } 
}

useEffect(()=>{
    getUser()
}, []);
    return(
        <div className='container'>
            <div className='row'>
                {
                user.map((e, i)=>{
                    return(
                        <div className='col-md-4 mb-4' key={i}>
                            <div className='card'>
                                <div className='card-header mb-2'>
                                    {e.name}
                                </div>
                                <div className='card-body'>
                                    <div className='mb-4'> 
                                        Website : <a href={`http://${e.website}`} target='_blank'> {e.website} </a>
                                    </div>
                                    <div className='d-grid'>
                                        <NavLink className='btn btn-primary' to={`/users/${e.id}`}>Show Profile</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )
                })
                }
            </div>
        </div>
    )
}

export default UsersIndex;