import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import DataUsers from '../DataUsers'
import axios from 'axios'
const Home = () => {
    const [data , setdata]=useState([])
    const [search , setsearch] = useState('')
    useEffect(()=>{
        axios.get("http://localhost:3000/Users").then((res)=>{
            setdata(res.data);
        }).catch((err)=>{console.log(err)});
    },[]);
    console.log(data)
    function deleteContent(id){
        const dataConfirm = window.confirm("do you sure to delete this user ? : ");
        if(dataConfirm){
            axios.delete("http://localhost:3000/Users/"+id).then(res=>{
                document.location.reload();
            }).catch(err=>{
                console.log(err)
            })
        }
        
    }

  return (
    <div className=' bg-slate-100 w-[100%] p-2 relative '>
        <h1 className='text-center text-xl font-mono'>Duraan mentorship real amazing</h1>
        <div>
            <div>
            {/* <button>Add + </button> */}
            <input className='p-3 rounded-md mt-3 w-80 shadow-lg' type='text' placeholder='Search username....' onChange={(e)=>{setsearch(e.target.value)}}/>
            <Link to='Create'  className=' shadow-lg cursor-pointer absolute top-12 right-10 px-5 py-2 text-lg bg-green-500 rounded-md text-white font-bold' >Add + </Link>
            </div>
            <table className='my-16 w-[100%] h-fit'>
                <thead>
                    <tr className="bg-gray-600">
                        <th className='p-1  text-white text-start'>ID</th>
                        <th className='p-1  text-white text-start'>Name</th>
                        <th className='p-1  text-white text-start'>Username</th>
                        {/* <th className='p-1  text-white text-start'>Email</th> */}
                        <th className='p-1  text-white text-start'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.filter(find=>{
                            return find.username.toLowerCase().includes(search.toLowerCase())
                        }).map(val=>{
                            return <tr key={val.id} className='divide-y divide-gray-400 '>
                            <td className='text-xs'>{val.id}</td>
                            <td className='text-xs'>{val.name}</td>
                            <td className='text-xs'>{val.username}</td>
                            {/* <td>{val.email}</td> */}
                            <td>
                                <Link to={`Read/${val.id}`} className='text-sm mr-4 bg-cyan-400 rounded-sm py-1 px-2 text-white cursor-pointer '>Read</Link>
                                <Link to={`/Edit/${val.id}`} className='text-sm mr-4 bg-green-400 rounded-sm py-1 px-2 text-white cursor-pointer '>Edit</Link>
                                <button onClick={()=>deleteContent(val.id)}  className='text-sm mr-4 bg-red-400 rounded-sm py-1 px-2 text-white'>Delete</button>
                            </td>
                        </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Home