import React from 'react'
import { FaGoogle } from "react-icons/fa";

const page = () => {
  return (
    <div className='bg-green-700 w-screen h-screen flex justify-center items-center'>
       <button className='bg-white shadow-lg rounded-lg px-5 py-2 flex items-center gap-2 hover:bg-gray-400'>
        <FaGoogle color='black'/>Login with Google</button>
    </div>
  )
}

export default page