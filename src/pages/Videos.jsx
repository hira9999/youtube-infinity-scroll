import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import { useInfiniteQuery } from '@tanstack/react-query';
import VideoCard from '../components/VideoCard';
import LoadingVideosRow from '../components/LoadingVideosRow';

export default function Videos() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();

  const fetchVideos = async ({ pageParam }) =>
    youtube.search(keyword, pageParam);

  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ['videos'],

    queryFn: fetchVideos,

    getNextPageParam: (lastPage, allPages) => lastPage.nextPageToken,
  });

  const intObserver = useRef();
  const lastVideoRef = useCallback(
    (video) => {
      if (isFetchingNextPage) return;
      if (intObserver.current) intObserver.current.disconnect();

      intObserver.current = new IntersectionObserver((videos) => {
        if (videos[0].isIntersecting && hasNextPage) {
          console.log('We are near the last post!');
          fetchNextPage();
        }
      });
      if (video) intObserver.current.observe(video);
    },
    [isFetchingNextPage, fetchNextPage, hasNextPage]
  );

  return (
    <div className="mx-32 my-28">
      {isLoading && <LoadingVideosRow column={4} />}
      {error && <p>Something is wrong..</p>}
      {data?.pages.map((videos, i) => (
        <ul
          key={i}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 gap-y-12 mx-3"
        >
          {videos.items.map((video, idx) => {
            return <VideoCard key={idx} video={video} />;
          })}
          <div ref={lastVideoRef} />
        </ul>
      ))}
      {isFetchingNextPage && <LoadingVideosRow column={3} />}
    </div>
  );
}
