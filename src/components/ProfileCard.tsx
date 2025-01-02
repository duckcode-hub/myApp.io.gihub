import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProfileCard = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6">
      <div className="h-20 relative">
        {/* Background picture */}
        <Image
          src="/covers (2).jpg"
          alt="Profile background"
          layout="fill"
          className="rounded-md object-cover "
        />

        {/* Profile Picture */}
        <div className="absolute left-0 right-0 m-auto -bottom-6 object-cover w-12 h-12 rounded-full ring-2 ring-white z-10 overflow-hidden">
          <Image
            src="/profilepicture (8).jpg"
            alt="Profile picture"
            width={48}
            height={48}
            className="object-cover"
          />
        </div>
      </div>
      <div className="h-20 flex flex-col gap-2 items-center">
        <span className='font-semibold'>Feline Juma</span>
        <div className="flex items-center gap-4">
          <div className="flex ">
            <Image
              src="/profilepicture (7).jpg"
              alt="followers"
              width={94}
              height={94}
              className="object-cover w-3 h-3 rounded-full"
            />
            <Image
              src="/profilepicture (6).jpg"
              alt="followers"
              width={94}
              height={94}
              className="object-cover w-3 h-3 rounded-full"
            />
            <Image
              src="/profilepicture (5).jpg"
              alt="followers"
              width={94}
              height={94}
              className="object-cover w-3 h-3 rounded-full"
            />
          </div>
          <span className='text-gray-500 text-sm'>1.3k followers</span>
        </div>

        {/* Updated Link to Profile */}
        <Link href="/profile/test">
          <button className='bg-blue-500 text-white text-sm px-2 py-1 rounded-md'>
            My profile
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProfileCard;
