import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const FriendRequests = () => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'>
        {/* TOP */}
        <div className="flex justify-between items-center font-medium">
            <span className=' text-gray-400 font-semibold'>Friend Reguest</span>
            <Link href='/' className='text-blue-500 text-xs'>see all</Link>
        </div>
        {/* FRIENDS/USERS */}
       
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
                <Image src="/profilepicture (2).jpg" alt="friends profile pic here" width={40} height={40} className="w-10 h-10 rounded-full object-cover"/>
                <span className='font-semibold'>Size Eightynine</span>
            </div>
            {/* buttons */}
            <div className=" flex  gap-3 justify-end">
            <Image src="/accept.png" alt="friends profile pic here" width={20} height={20} className="cursor-pointer"/>
            <Image src="/reject.png" alt="friends profile pic here" width={20} height={20} className="cursor-pointer"/>
            </div>
        </div>
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
                <Image src="/profilepicture (3).jpg" alt="friends profile pic here" width={40} height={40} className="w-10 h-10 rounded-full object-cover"/>
                <span className='font-semibold'>Kyllan Mbappe</span>
            </div>
            {/* buttons */}
            <div className=" flex  gap-3 justify-end">
            <Image src="/accept.png" alt="friends profile pic here" width={20} height={20} className="cursor-pointer"/>
            <Image src="/reject.png" alt="friends profile pic here" width={20} height={20} className="cursor-pointer"/>
            </div>
        </div>
    </div>
  )
}

export default FriendRequests;