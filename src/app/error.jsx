'use client'
import {useEffect} from 'react'

const Error = ({error, reset}) => {
    useEffect(()=>{
        console.log(error)
    },[error])
  return (
    <div className='text-center mt-10 space-y-4'>
        <h1 className='text-2xl font-semibold'>Something went wrong</h1>
        <button className='border hover:border-amber-600 py-2 px-4' onClick={()=> reset()}>Try Again</button>
    </div>
  )
}

export default Error