import axios from "axios";
const BASE_URL = process.env.SSDA_API ?? "https://api.ssda.dawoony.com";
export default axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});
export const axiosAuth = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});
