import React from 'react'
import LeftMenu from '@/components/LeftMenu'
import Feed from '@/components/Feed'
import RightMenu from '@/components/RightMenu'
import Image from 'next/image'
const ProfilePage = () => {
  return (
     <div className="flex gap-6 pt-6">
      {/* left-side */}
      <aside className="hidden xl:block w-[20%]">
        <LeftMenu type="profile"/>
      </aside>

      {/* center */}
      <main className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center justify-center bg-white rounded-md">
            <div className="w-full h-64 relative">
              <Image 
              src="/covers (2).jpg" 
              alt="cover Pic" 
              fill 
              className="object-cover rounded-md" /> 

              <Image 
              src="/profilepicture (8).jpg" 
              alt="Profile Pic" 
              width={128} 
              height={128} 
              className="w-32 h-32 rounded-full absolute left-0 right-0 m-auto ring-4 ring-white -bottom-16 object-cover" /> 
            </div>
            <h1 className='text-2xl font-medium mt-20 mb-4'>Feline Juma</h1>
            <div className="flex items-center justify-center gap-12 mb-4">
              <div className="flex flex-col items-center">
                <span className='font-medium'>123</span>
                <span className='text-sm'>Posts</span>
              </div>
              <div className="flex flex-col items-center">
                <span className='font-medium'>1.3k</span>
                <span className='text-sm'>Follewers</span>
              </div>
              <div className="flex flex-col items-center">
                <span className='font-medium'>13k</span>
                <span className='text-sm'>Following</span>
              </div>
            </div>
          </div>
          <Feed />
        </div>
      </main>

      {/* right-side */}
      <aside className="hidden lg:block w-[30%]">
        <RightMenu  userId="test"/>
      </aside>
    </div>
  )
}

export default ProfilePage