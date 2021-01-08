import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function UsersShow(){
    const [user, setUser] = useState([])
    let {identifier} = useParams();
    const getUserId = async () => {
        try{
            let response = await Axios.get(`https://jsonplaceholder.typicode.com/users/${identifier}`)
            setUser(response.data);
        }catch(e){
            console.log(e.message);
        }
    }

    useEffect(()=>{
        getUserId();
    }, []);

    return(
        <div>
            nama : {user.name} <br/>
            email : {user.email} <br/>
            website : {user.website}
        </div>
    )
}

export default UsersShow;