import React from 'react';
import Image from 'next/image';

const Ad = ({ size }: { size: 'sm' | 'md' | 'lg' }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm">
      {/* Top Section */}
      <div className="flex items-center justify-between text-gray-500 font-medium">
        <span>Sponsored Ads</span>
        <Image src="/more.png" alt="More options" width={16} height={16} />
      </div>

      {/* Bottom Section */}
      <div className={`flex flex-col mt-4 ${size === 'sm' ? 'gap-2' : 'gap-4'}`}>
        {/* Image Section */}
        <div className={`relative w-full ${size === 'sm' ? 'h-24' : size === 'md' ? 'h-36' : 'h-48'}`}>
          <Image 
            src="/covers (4).jpg" 
            alt="Ad image" 
            fill 
            className="rounded-lg object-cover"
          />
        </div>

        {/* Info Section */}
        <div className="flex items-center gap-4">
          <Image 
            src="/covers (4).jpg" 
            alt="Brand logo" 
            width={24} 
            height={24} 
            className="rounded-full w-6 h-6 object-cover" 
          />
          <span className="text-blue-700 font-medium text-semibold">ParisBurg Lounge</span>
        </div>

        {/* Description Section */}
        <p className={size === 'sm' ? 'text-xs' : 'text-sm'}>
          {size === 'sm'
            ? "ParisBurg Lounge is a luxury hotel in Paris, combining sophisticated design with exceptional service and breathtaking views of the city's iconic landmarks. Guests can enjoy gourmet dining, a tranquil spa, and a range of exclusive amenities for both relaxation and business. With its prime location and impeccable offerings, ParisBurg Lounge provides an unforgettable Parisian experience.."
            : size === 'md'
            ? 'ParisBurg Lounge offers a luxurious experience in the heart of Paris, with elegant accommodations, world-class dining, and stunning views of iconic landmarks. The hotel provides exceptional service, a full range of amenities including a spa, fitness center, and infinity pool, ensuring guests enjoy ultimate relaxation and comfort. Whether for business or leisure, ParisBurg Lounge is the perfect destination for an unforgettable stay in the City of Lights..'
           :''}
        </p>
        <button className='bg-blue-500 text-white hover:bg-blue-700 p-2 text-xs rounded-lg'>Learn more</button>
      </div>
    </div>
  );
};

export default Ad;
