import React from 'react'
import Link from 'next/link'
export default function More() {
  return (
    <div className='flex flex-col'>
      <h1 className='font-bold'>More</h1>
      <Link className='hover:text-black' href={""}>Help</Link>
      <Link className='hover:text-black' href={""}>Privacy & Policy</Link>
      <Link className='hover:text-black' href={""}>Terms & Condition</Link>
      <Link className='hover:text-black' href={""}>Cancellation Policy</Link>
    </div>
  )
}
