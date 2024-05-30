import React, { useEffect, useState } from 'react';

const Users = () => {

    const[user, setUser] = useState([])

    const fetchData = async() =>{
        await fetch(`http://localhost:7000/users`)
        .then(res => res.json())
        .then(data =>setUser(data))
    }

    useEffect(()=>{
        fetchData()
    },[])

    const handleDelete = (_id) =>{
        console.log(_id)
        fetch(`http://localhost:7000/users/${_id}`,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    return (
        <div>
            <p>{user.length}</p>
            {
                user.map( u => <li key={u._id}>{u.name} = {u.email} <button onClick={()=>handleDelete(u._id)}>X</button></li>)
            }
        </div>
    );
};

export default Users;