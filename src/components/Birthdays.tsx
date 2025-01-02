import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Birthdays = () => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'>
    {/* TOP */}
    <div className="flex justify-between items-center font-medium">
        <span className='text-gray-500'>Birthdays</span>
        <Link href='/' className='text-blue-500 text-xs'>see all</Link>
    </div>
    {/* friend requests */}
    <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
            <Image src="/profilepicture (1).jpg" alt="friends profile pic here" width={40} height={40} className="w-10 h-10 rounded-full object-cover"/>
            <span className='font-semibold'>Paul Walker</span>
        </div>
        {/* buttons */}
        <div className=" flex  gap-3 justify-end">
       <button className='bg-blue-500 hover:bg-blue-700  text-white text-sm px-2 py-1 rounded-md'>Celebrate</button>
        </div>
    </div>
    {/* UPCOMING */}
    <div className="p-4 bg-slate-100 rounded-lg flex items-center gap-4  "><Image src="/gift.png" alt="friends profile pic here" width={24} height={24} />
    <Link href="/" className='flex flex-col text-xs gap-1'>
    <span className='text-gray-700 font-semibold'>Up coming Birthdays</span>
    <span className='text-gray-500'>See other 16  have upcoming birthdays</span>
    </Link>
    
    </div>
    </div>
  )
}

export default Birthdays
