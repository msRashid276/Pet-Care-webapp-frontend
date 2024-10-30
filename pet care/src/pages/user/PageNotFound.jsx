import React from 'react'
import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {

  const navigate = useNavigate();

  return (
    <div className='w-full'>
        <div className='flex flex-col items-center justify-center space-y-5 tracking-wider pt-7'>
            <h1 className='text-7xl'>404 Not Found</h1>
            <p className='pb-7'>Your Visited Page Not found. You may go home page</p>
            <button className='px-6 rounded py-3 bg-red-600 text-white' onClick={()=>navigate("/user/home")}>Back to Home page</button>
        </div>
    </div>
  )
}

export default PageNotFound