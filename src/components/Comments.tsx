import React from 'react'
import Image from 'next/image'

const Comments = () => {
  return (
    
    <div className=''>
     
        {/*here where the post maker can write a comment */}
        <div className="flex items-center gap-4">
            <Image src="/profilepicture (8).jpg" alt="" 
            width={32} 
            height={32} 
            className="w-8 h-8 rounded-full" />
           
            <div className="flex items-center justify-between bg-slate-100 rouded-xl text-sm px-6 py-2 w-full rounded-md">
                <input type="text" 
                placeholder='Write a comment ...'  
                className='bg-transparent outline-none flex-1'/>

                <Image src="/emoji.png" 
                alt="" 
                width={16} 
                height={16} 
                className="cursor-pointer" 
                />
            </div>
        </div>
    
        {/*  comments for someone thjat commented on your post section */}
        <div className="">
          <div className='font-medium text-sm text-gray-700 mt-4 pt-2'>
            Comments
            <hr className='border-t-2 border-gray-100 self-center mt-2'/>
          </div>

            {/* commentor profile picture */}
            <div className="flex gap-4 justify-between mt-6">
                {/*avatar */}
                <Image src="/pics (3).jpg" alt="" 
                width={40} 
                height={40} 
                className="w-10 h-10 rounded-full" />

                
                {/* DESC */}
                <div className="flex flex-col gap-2 flex-1 ">
                    <span className='font-medium'>Ann Njambi</span>
                    <p>Web development has got new dimensions with the rise of AI and machine learning plus automations and robotics.</p>
                    
                    {/* likes and reply buttons */}
                    <div className="flex items-center gap-8 text-xs text-gray-500 mt-2">
                        <div className="flex items-center gap-4">
                        <Image src="/like.png" 
                                 alt="" 
                                 width={12} 
                                 height={12} 
                                className='cursor-pointer w-4 h-4'/>
                                <span className='text-gray-400 font-semibold'>|</span>
                                <span className='text-gray-400 font-semibold'>123 Likes</span>
                        </div>
                      <div className="text-gray-400 font-semibold">
                            Reply
                    </div>

                    </div>
                    
                </div>
                {/* ICON */}
                <Image src="/more.png" 
                alt="the three dots here..." 
                width={16} 
                height={16} 
                className='cursor-pointer w-4 h-4'/>
            </div>
            <hr className='border-t-2 border-gray-100 self-center mt-2'/>
        </div>
        </div>
  );
};

export default Comments;
