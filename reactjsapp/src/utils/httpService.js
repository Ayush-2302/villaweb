import axios from "axios";

const base_url = "http://localhost:4000/api";

const httpService = axios.create({
  baseURL: base_url,
});

export default httpService;
