import React from 'react';
import Image from 'next/image';
import Comments from './Comments';

const Post = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* User profile picture who is posting */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="/profilepicture (8).jpg"
            width={48}
            height={48}
            alt="avatar"
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium">Feline Juma</span>
        </div>
        <Image
          src="/more.png"
          width={16}
          height={16}
          alt="More options"
        />
      </div>

      {/* Description div */}
      <div className="flex flex-col gap-4">
        <div className="relative w-full h-64">
          <Image
            src="/story (4).jpg"
            alt="Post image"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
        <p>
          Ad, nothing greater, with truth in the times of life and honor, quas
          minus iusto, without the absence of encouragement, eaque nonetheless!
          Veritatis reiciendis through insights, walking with celebration.
        </p>
      </div>

      {/* Interaction section for likes, comments, and shares */}
      <div className="flex items-center justify-between text-sm my-4">
        <div className="flex gap-8">
          <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
            <Image
              src="/like.png"
              width={16}
              height={16}
              alt="Like"
              className="cursor-pointer"
            />
            <span className="text-gray-500">|</span>
            <span className="text-gray-700">
              600k <span className="hidden md:inline">Likes</span>
            </span>
          </div>
          <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
            <Image
              src="/comment.png"
              width={16}
              height={16}
              alt="Comments"
              className="cursor-pointer"
            />
            <span className="text-gray-500">|</span>
            <span className="text-gray-700">
              123 <span className="hidden md:inline">comments</span>
            </span>
          </div>
        </div>
        {/* Right side section */}
        <div>
          <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
            <Image
              src="/share.png"
              width={16}
              height={16}
              alt="Share"
              className="cursor-pointer"
            />
            <span className="text-gray-500">|</span>
            <span className="text-gray-700">
              43k <span className="hidden md:inline">shared</span>
            </span>
          </div>
        </div>
      </div>

      {/* Comment section from the Comments component */}
      <Comments />
    </div>
  );
};

export default Post;
