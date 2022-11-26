import React, { useMemo } from 'react';
import DummyVideo from './DummyVideo';

const LoadingVideosRow = ({ column }) => {
  const columnArr = [...Array(column)];
  const dummyVideos = columnArr.map((e, i) => (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 gap-y-12 mx-3 mb-24">
      <DummyVideo />
      <DummyVideo />
      <DummyVideo />
      <DummyVideo />
    </ul>
  ));

  return <>{dummyVideos}</>;
};

export default LoadingVideosRow;
