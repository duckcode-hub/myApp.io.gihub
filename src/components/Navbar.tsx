"use client";
import React from 'react';
import Link from 'next/link';
import MobileMenu from './MobileMenu';
import Image from 'next/image';
import { ClerkLoading, SignedIn, SignedOut, ClerkLoaded } from '@clerk/clerk-react'; // Ensure the import is correct
import { UserButton } from '@clerk/clerk-react';

const Navbar = () => {
  return (
    <div className="h-24 flex items-center justify-between">
      {/* Left */}
      <div className="md:hidden lg:block w-[20%]">
        <Link href="/">
          <span className="font-bold text-xl text-blue-800">myApp</span>
        </Link>
      </div>

      {/* Center */}
      <div className="hidden md:flex w-[50%] text-sm items-center justify-between">
        {/* Links */}
        <div className="flex gap-8 text-gray-600">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/home.png" alt="Homepage" width={16} height={16} className="w-4 h-4" />
            <span>Homepage</span>
          </Link>

          <Link href="/" className="flex items-center gap-2">
            <Image src="/friends.png" alt="Friends" width={16} height={16} className="w-4 h-4" />
            <span>Friends</span>
          </Link>

          <Link href="/" className="flex items-center gap-2">
            <Image src="/stories.png" alt="Stories" width={16} height={16} className="w-4 h-4" />
            <span>Stories</span>
          </Link>
        </div>
        <div className="hidden xl:flex p-2 bg-slate-100 items-center rounded-xl">
          <input type="text" placeholder="Search . . ." className="bg-transparent outline-none" />
          <Image src="/search.png" alt="Search" width={14} height={14} className="w-4 h-4" />
        </div>
      </div>

      {/* Right */}
      <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
        <ClerkLoading>
          <div className="inline-block h-6 w-6 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_5.5s_linear_infinite"></div>
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <div className="cursor-pointer">
              <Image src="/people.png" alt="people" width={24} height={24} className="w-8 h-8 rounded-full" />
            </div>
            <div className="cursor-pointer">
              <Image src="/messages.png" alt="messages" width={24} height={24} className="w-8 h-8 rounded-full" />
            </div>
            <div className="cursor-pointer">
              <Image src="/notifications.png" alt="notifications" width={24} height={24} className="w-8 h-8 rounded-full" />
            </div>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <div className="cursor-pointer flex items-center gap-2 text-sm ">
              <Image src="/login.png" alt="login" width={24} height={24} className="w-8 h-8 rounded-full" />
              <Link href="/sign-in">Login</Link>
            </div>
          </SignedOut>
        </ClerkLoaded>
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
