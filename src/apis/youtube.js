import axios from "axios";

const KEY = "AIzaSyD5xtjMjhYsHwPoTnna6E0aU-gfxi1RXcA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
