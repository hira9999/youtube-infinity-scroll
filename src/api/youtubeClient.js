import axios from 'axios';

export default class youtubeClient {
  constructor() {
    this.httpClient = axios.create({
      baseURL: 'https://youtube.googleapis.com/youtube/v3',
      params: { key: 'AIzaSyCMaWJUtdSM_Hv1I3_dziZSTVOOPF30m3I' },
    });
  }

  async search(params) {
    return this.httpClient.get('search', params);
  }

  async videos(params) {
    return this.httpClient.get('videos', params);
  }
  async channels(params) {
    return this.httpClient.get('channels', params);
  }
}
