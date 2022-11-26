import React from 'react';

const DummyVideo = () => {
  return (
    <li className="w-full">
      <div className="w-full h-52 rounded-lg bg-gray-800" />
      <div className="flex w-full">
        <div className="w-10 h-10 rounded-full bg-gray-800 mr-3 mt-3" />
        <div className="w-full pt-3 pr-3 space-y-3">
          <div className="w-full h-5 rounded-lg bg-gray-800" />
          <div className="w-full h-5 rounded-lg bg-gray-800" />
        </div>
      </div>
    </li>
  );
};

export default DummyVideo;
