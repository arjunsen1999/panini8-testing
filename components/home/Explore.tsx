import React from 'react'
import Link from 'next/link'
export default function Explore() {
  return (
    <div className='flex flex-col'>
      <h1 className='font-bold'>Explore</h1>
      <Link className='hover:text-black' href={""}>SignUp</Link>
      <Link className='hover:text-black' href={""}>SignIn</Link>
      <Link className='hover:text-black' href={""}>Testomonials</Link>
    </div>
  )
}
