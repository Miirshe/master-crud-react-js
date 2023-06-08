import React from 'react'
import { useState , useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom'
const Read = () => {
  const [data , setdata]=useState([]);
  const {id} = useParams();
  useEffect(()=>{
      axios.get(" http://localhost:3000/Users/" + id ).then((res)=>{
          setdata(res.data);
      }).catch((err)=>{console.log(err)});
  },[id]);
  return (
    <div className=' w-[78%] h-80 bg-gray-200 rounded-md p-3 my-20 mx-auto shadow-xl'>
      <h2 className='text-2xl font-serif font-bold p-2 m-2 ml-4 text-blue-600'>Detail Data Users</h2>
      <p className='p-4 m-3 text-lg font-medium'>Name : <strong className=' tracking-tighter '>{data.name}</strong> </p>
      <p className='p-4 m-3 text-lg font-medium'>Username : <strong className=' tracking-tighter ' >{data.username}</strong></p>
      <Link to='/' className='text-base py-3 px-7 mx-7 mt-2 font-bold rounded-md bg-blue-600 text-white uppercase '>Back</Link>
    </div>
  )
}

export default Read