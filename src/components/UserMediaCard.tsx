import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const UserMediaCard = ({ userId }: { userId: string }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* TOP */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500 text-sm font-semibold">User Media</span>
        <Link href="/" className="text-blue-500 text-xs">
          see all
        </Link>
      </div>
      {/* BOTTOM */}
      <div className="grid grid-cols-6 gap-2">
        {[
          '/story (1).jpg',
          '/story (3).jpg',
          '/story (4).jpg',
          '/story (5).jpg',
          '/story (6).jpg',
          '/story (7).jpg',
          '/story (8).jpg',
          '/story (9).jpg',
          '/story (2).jpg',
          '/story (10).jpg',
        ].map((src, index) => (
          <div key={index} className="relative w-full h-24">
            <Image
              src={src}
              alt={`Story ${index + 1}`}
              layout="fill"
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserMediaCard;
