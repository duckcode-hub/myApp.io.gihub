import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const UserinfoCard = ({userId}:{userId: string}) => {
  return (
      <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'>
        {/* TOP */}
        <div className="flex justify-between items-center font-medium">
            <span className='text-gray-500'>User Information </span>
            <Link href='/' className='text-blue-500 text-xs'>see all</Link>
        </div>
        {/* BOTTOM */}
        <div className="flex flex-col gap-4 text-gray-500">
            <div className="flex items-center gap-2">
                <span className='text-xl text-black'>Feline Juma</span>
                <span className='text-sm'>@amauterecodes</span>
            </div>
            {/* description */}
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia architecto molestias provident est, </p>
            <div className="flex items-center gap-2">
                <Image src="/map.png" alt="" width={16} height={16}/>
                <span>Living in <b>Kivuvois</b></span>
            </div>
            <div className="flex items-center gap-2">
                <Image src="/school.png" alt="" width={16} height={16}/>
                <span>went to <b>kenswed College</b></span>
            </div>
            <div className="flex items-center gap-2">
                <Image src="/work.png" alt="" width={16} height={16}/>
                <span>works in GTC inc. <b>Nairobi</b></span>
            </div>
            <div className="flex  items-center justify-between">
                <div className="flex gap-1 items-center">
                <Image src="/link.png" alt="" width={16} height={16}/>
                    <Link href="https//:google.com " className='text-blue-500 font-medium'>www.duckcodes.co.ke</Link>
                </div>
                <div className="flex gap-1 items-center">
                <Image src="/date.png" alt="" width={16} height={16}/>
                <span>Joined December 2004</span>

                </div>
            </div>
            <button className='bg-blue-500 text-white text-sm rounded-md p-2 hover:bg-blue-700 cursor-pointer'>Follow</button>
            <span className='text-red-400 self-end text-xs cursor-pointer'>Block user</span>
        </div>
        </div>
  )
}

export default UserinfoCard;