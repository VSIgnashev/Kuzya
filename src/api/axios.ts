import axios from "axios";
import configuration from "../config";

export const BASE_URL: string = configuration.API_URL;

export default axios.create({ baseURL: BASE_URL });
