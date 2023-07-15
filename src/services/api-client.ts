import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "6d808ad3d1da49d194d0b578c2453026",
  },
});
