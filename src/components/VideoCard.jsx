import React from 'react';
import { useNavigate } from 'react-router-dom';
import ChannelInfo from './ChannelInfo';

const VideoCard = ({ video, type }) => {
  const { title, thumbnails, channelTitle, channelId } = video.snippet;
  const navigate = useNavigate();
  const isList = type === 'list';
  return (
    <li
      className={isList ? 'flex cursor-pointer' : 'cursor-pointer'}
      onClick={() => {
        navigate(`/videos/watch/${video.id}`, { state: { video } });
      }}
    >
      <div>
        <img
          className={isList ? 'w-60 mr-2 rounded-lg' : 'w-full rounded-lg'}
          src={thumbnails.medium.url}
          alt={title}
        />
      </div>
      <div className="flex w-full">
        {!isList && <ChannelInfo id={channelId} title={title} />}
        <div className={isList ? '' : `pt-3 pr-3 w-5/6 space-y-2`}>
          <p className="font-semibold">{title}</p>
          <p className="text-sm opacity-80">{channelTitle}</p>
        </div>
      </div>
    </li>
  );
};

export default VideoCard;
