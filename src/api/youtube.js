import axios from 'axios';

export default class Youtube {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async search(keyword, nextPageToken) {
    return keyword
      ? this.#searchByKeyword(keyword, nextPageToken)
      : this.#mostPopular(nextPageToken);
  }
  async channelImageURL(id) {
    return this.apiClient
      .channels({ params: { part: 'snippet', id } })
      .then((res) => res.data.items[0].snippet.thumbnails.default.url);
  }

  async relatedVideos(id) {
    return this.apiClient
      .search({
        params: {
          part: 'snippet',
          maxResults: 24,
          type: 'video',
          relatedToVideoId: id,
        },
      })
      .then((res) => res.data);
  }

  async #searchByKeyword(keyword, nextPageToken) {
    return this.apiClient
      .search({
        params: {
          part: 'snippet',
          maxResults: 24,
          type: 'video',
          q: keyword,
          pageToken: nextPageToken,
        },
      })
      .then((res) => res.data);
  }

  async #mostPopular(nextPageToken) {
    return this.apiClient
      .videos({
        params: {
          part: 'snippet',
          maxResults: 24,
          chart: 'mostPopular',
          pageToken: nextPageToken,
        },
      })
      .then((res) => res.data);
  }
}
