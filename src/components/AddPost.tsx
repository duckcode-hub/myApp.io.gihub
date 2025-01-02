import React from 'react';

const AddPost = () => {
  return (
    // write and post the posts
    <div className="p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm">
      <img src="/profilepicture (8).jpg" alt="my post" width={48} height={48} className="w-12 h-12 object-cover rounded-full" />

      {/* POST */}
      <div className='flex-1'>
        {/* text input */}
        <div className="flex gap-4 items-end">
  <textarea
    placeholder="Juma! What's on your mind?"
    className="flex-1 bg-slate-100 rounded-lg p-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
    rows={3} // Optional: Adjust for default height
  ></textarea>
  <button 
    className="flex items-center justify-center w-8 h-8 bg-transparent hover:bg-slate-200 rounded-full cursor-pointer"
    aria-label="Add emoji"
  >
    <img 
      src="/emoji.png" 
      alt="Add emoji" 
      className="w-5 h-5" 
    />
  </button>
</div>
        {/* posting options */}
        <div className='flex items-center gap-6 mt-4 text-gray-400 flex-wrap'>
          <div className="flex items-center gap-2 cursor-pointer">
          <img src="/addimage.png" alt="my post" 
          width={20} 
          height={20}
           />
           Photo
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
          <img src="/addvideo.png" alt="my post" 
          width={20} 
          height={20}
           />
           Videos
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
          <img src="/addevent.png" alt="my post" 
          width={20} 
          height={20}
           />
           Events
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
          <img src="/poll.png" alt="my post" 
          width={20} 
          height={20}
           />
           Poll
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
