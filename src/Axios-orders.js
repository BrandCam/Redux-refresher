import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-buddy.firebaseio.com/",
});

export default instance;
