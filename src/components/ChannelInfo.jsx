import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../context/YoutubeApiContext';

const ChannelInfo = ({ id, title }) => {
  const { youtube } = useYoutubeApi();
  const { data: url } = useQuery(['channel', id], () =>
    youtube.channelImageURL(id)
  );

  return (
    <div className="flex w-10 h-10 mr-3 mt-3">
      <img className="w-full rounded-full" src={url} />
    </div>
  );
};

export default ChannelInfo;
