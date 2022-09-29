import axios from "axios";
import { JWT_TOKEN_STORAGE_KEY } from "../utils/constans.js";

export const authenticationApiClient = axios.create({
  baseURL: "https://questify-backend-goit.herokuapp.com/", //to be changed after backend be deployed
});

export const questifyApiClient = axios.create({
  baseURL: "https://questify-backend-goit.herokuapp.com/", //to be changed after backend be deployed
  headers: {
    Authorization: "Bearer " + localStorage.getItem(JWT_TOKEN_STORAGE_KEY),
  },
});
