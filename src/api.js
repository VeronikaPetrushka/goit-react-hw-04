import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

const fetchPhotosWithTopic = async (topic) => {
  const response = axios.get(`/search/photos?query=${topic}`);
  return response.data.hits;
};

const accessKey = "ws2fGeHWZ0yz62KUutYPYWk-1LZA4NnyUNmtmak3VgI";

axios.interceptors.request.use((config) => {
  config.url += `&client_id=${accessKey}`;
  return config;
});

export default fetchPhotosWithTopic;
