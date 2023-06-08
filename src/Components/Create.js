import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
const Create = () => {
  const [values , setvalue] = useState({
    name :'',
    username : ''
  })
  const navigate = useNavigate();
  function handleEvent (e){
    e.preventDefault();
    axios.post("http://localhost:3000/Users", values).then((res)=>{
            console.log(res);
            navigate('/');
        }).catch((err)=>{console.log(err)});
  }
  return (
    <div className=' w-[78%] h-fit bg-gray-200 rounded-md p-3 my-20 mx-auto shadow-md '>
      <form onSubmit={handleEvent}>
      <h2 className='text-2xl font-serif font-bold p-2 m-2 text-blue-600'>Add User</h2>
        <label className='text-lg p-2 m-2'>Name : </label><br></br>
        <input onChange={(e)=>setvalue({...values , name : e.target.value})} className='border-0 p-3  rounded-md w-72 ml-4 ' type="text" name="name" placeholder='enter your Name ? : '/><br></br><br></br>
        <label className='text-lg p-2 m-2'>Username : </label><br></br>
        <input onChange={(e)=>setvalue({...values , username : e.target.value})} className='border-0 p-3 rounded-md w-72 ml-4 ' type="text" name="name" placeholder='enter your username ? : '/><br></br><br></br>
        <button className='text-base py-3 px-6 mx-4 font-bold rounded-md bg-blue-600 text-white uppercase '>submit</button>
        {/* <link to='/'></link> */}
        <Link to='/' className='text-base py-3 px-6 mx-4 font-bold rounded-md bg-black text-white uppercase '>Back</Link>
        {/* <button >Back</button> */}
      </form>
    </div>
  )
}

export default Create