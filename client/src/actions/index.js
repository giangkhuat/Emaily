import axios from "axios";
import { FETCH_USER } from "./types";
// define action creater
const fetchUser = () => {
  axios.get("/api/current_user");
};
