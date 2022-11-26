import React from 'react';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import { useQuery } from '@tanstack/react-query';
import VideoCard from './VideoCard';

const RelativeVideos = ({ id }) => {
  const { youtube } = useYoutubeApi();
  const { data, isLoading, error } = useQuery(
    ['relative', id],
    async () => youtube.relatedVideos(id),
    {
      staleTime: 6000,
    }
  );

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong</p>}
      <ul className="space-y-3 p-5">
        {data?.items.map((video, idx) => (
          <VideoCard key={idx} video={video} type="list" />
        ))}
      </ul>
    </>
  );
};

export default RelativeVideos;
