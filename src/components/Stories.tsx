import React from 'react'
import Image from 'next/image'
const Stories = () => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md overflow-scroll text-xs scrollbar-hide'>
      <div className="flex gap-8 w-max">
        {/* stories */}
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image src="/lazaro.jpg" alt="story " width={80} height={80} className="w-20 h-20 rounded-full ring-2 ring-white" />
          <span className='font-medium'>Lazaro Hesus</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image src="/story (1).jpg" alt="story " width={80} height={80} className="w-20 h-20 rounded-full ring-2 ring-white" />
          <span className='font-medium'>Richard Ochanda</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image src="/story (2).jpg" alt="story " width={80} height={80} className="w-20 h-20 rounded-full ring-2 ring-white" />
          <span className='font-medium'>Ian Ngungu</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image src="/story (3).jpg" alt="story " width={80} height={80} className="w-20 h-20 rounded-full ring-2 ring-white" />
          <span className='font-medium'>Mary Adhiambo</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image src="/story (4).jpg" alt="story " width={80} height={80} className="w-20 h-20 rounded-full ring-2 ring-white" />
          <span className='font-medium'>Brian Somoine</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image src="/story (5).jpg" alt="story " width={80} height={80} className="w-20 h-20 rounded-full ring-2 ring-white" />
          <span className='font-medium'>Ivy Atieno</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image src="/story (6).jpg" alt="story " width={80} height={80} className="w-20 h-20 rounded-full ring-2 ring-white" />
          <span className='font-medium'>Solomon Tatia</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image src="/story (7).jpg" alt="story " width={80} height={80} className="w-20 h-20 rounded-full ring-2 ring-white" />
          <span className='font-medium'>Gabu Simma</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image src="/story (8).jpg" alt="story " width={80} height={80} className="w-20 h-20 rounded-full ring-2 ring-white" />
          <span className='font-medium'>Mimi Nancy</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image src="/story (9).jpg" alt="story " width={80} height={80} className="w-20 h-20 rounded-full ring-2 ring-white" />
          <span className='font-medium'>Jerusalema Arimathayos</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image src="/story (10).jpg" alt="story " width={80} height={80} className="w-20 h-20 rounded-full ring-2 ring-white" />
          <span className='font-medium'>Lalala Lala</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image src="/story (11).jpg" alt="story " width={80} height={80} className="w-20 h-20 rounded-full ring-2 ring-white" />
          <span className='font-medium'>mom Awinya</span>
        </div>
         
      </div>
    </div>
  )
}

export default Stories;

