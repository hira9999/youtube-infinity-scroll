import React from 'react';
import { useLocation } from 'react-router-dom';
import RelativeVideos from '../components/RelativeVideos';

const VideoDetail = () => {
  const {
    state: { video },
  } = useLocation();
  const { title, channelId, channelTitle, description } = video.snippet;

  return (
    <div className="flex p-20">
      <article className="basis-3/4 p-5">
        <iframe
          id="player"
          type="text/html"
          width="100%"
          height="640"
          src={`https://www.youtube.com/embed/${video.id}`}
          frameBorder="0"
          title={title}
        />
        <div className="p-8">
          <h2 className="text-xl font-bold">{title}</h2>
          <pre className="whitespace-pre-wrap">{description}</pre>
        </div>
      </article>
      <section className="  basis-1/4">
        <RelativeVideos id={video.id} />
      </section>
    </div>
  );
};

export default VideoDetail;
