import { createContext, useContext } from 'react';
import Youtube from '../api/youtube';
import youtubeClient from '../api/youtubeClient';

const client = new youtubeClient();
const youtube = new Youtube(client);

const YoutubeContext = createContext();

export const YoutubeApiProvider = ({ children }) => {
  return (
    <YoutubeContext.Provider value={{ youtube }}>
      {children}
    </YoutubeContext.Provider>
  );
};

export const useYoutubeApi = () => {
  return useContext(YoutubeContext);
};
