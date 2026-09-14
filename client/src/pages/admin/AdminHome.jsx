import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function AdminHome() {
    const[data,setData] =useState([]);
    const handlefetch = async () =>{
        const res = await axios.get ('http://localhost:5000/api/admindashboard/')
        setData(res.data);

    }
    useEffect(()=>{
        handlefetch()
    },[])
    console.log(data)
  return (
    <div>
      
    </div>
  )
}

export default AdminHome
