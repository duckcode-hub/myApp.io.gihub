"use client";

import React, { useEffect, useRef, useState } from 'react';
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa';

const Ad = ({ size }: { size: 'sm' | 'md' | 'lg' }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true); // State to manage mute/unmute
  const [showNoAdsMessage, setShowNoAdsMessage] = useState(false); // State for "No ads to watch" message

  const videoSources = [
    '/adz (1).mp4',
    '/adz (2).mp4',
    '/adz (3).mp4',
    '/ads (2).mp4',
  ]; // List of videos

  useEffect(() => {
    if (videoRef.current && !showNoAdsMessage) {
      videoRef.current.play().catch((error) => {
        console.error('Autoplay failed:', error);
      });
    }
  }, [currentVideoIndex, showNoAdsMessage]);

  const handleVideoEnd = () => {
    if (currentVideoIndex === videoSources.length - 1) {
      // Show "No ads to watch" message
      setShowNoAdsMessage(true);

      // After 5 seconds, restart from the first video
      setTimeout(() => {
        setCurrentVideoIndex(0); // Restart from the first video
        setShowNoAdsMessage(false); // Hide the "No ads" message
      }, 5000);
    } else {
      setCurrentVideoIndex((prevIndex) => prevIndex + 1); // Move to the next video
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm">
      {/* Top Section */}
      <div className="flex items-center justify-between text-gray-500 font-medium">
        <span>Sponsored Video Ads</span>
        <button
          onClick={toggleMute}
          className="text-blue-500 text-lg hover:text-blue-700"
        >
          {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
        </button>
      </div>

      {/* Bottom Section */}
      <div className={`flex flex-col mt-4 ${size === 'sm' ? 'gap-2' : 'gap-4'}`}>
        {/* Video Section */}
        <div className={`relative w-full ${size === 'sm' ? 'h-24' : size === 'md' ? 'h-36' : 'h-48'}`}>
          {showNoAdsMessage ? (
            <div className="flex items-center justify-center h-full bg-gray-200 rounded-lg">
              <span className="text-gray-700 font-medium text-lg">No ads to watch?</span>
            </div>
          ) : (
            <video
              ref={videoRef}
              src={videoSources[currentVideoIndex]}
              className="rounded-lg object-cover w-full h-full"
              muted={isMuted} // Dynamically set mute state
              playsInline
              autoPlay
              onEnded={handleVideoEnd}
            >
              Your browser does not support the video tag.
            </video>
          )}
        </div>

        {/* Info Section */}
        <div className="flex items-center gap-4 mt-2">
          <span className="text-blue-700 font-medium text-semibold">Video Ads</span>
        </div>

        {/* Description Section */}
        <p className={size === 'sm' ? 'text-xs' : 'text-md'}>
          {size === 'sm'
            ? 'Watch Ads and earn money into your Mpesa.'
            : size === 'md'
            ? 'Watch Ads and earn money into your Mpesa...'
            : ''}
        </p>

        {/* Existing Button */}
        <button className="bg-blue-500 text-white hover:bg-blue-700 p-2 text-xs rounded-lg">
          Watch now
        </button>
      </div>
    </div>
  );
};

export default Ad;
