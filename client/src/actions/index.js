import axios from "axios";
import { FETCH_USER } from "./types";
// define action creater
export const fetchUser = () =>
  async function (dispatch) {
    // dispatch when we get response back
    const response = await axios.get("/api/current_user");
    dispatch({ type: FETCH_USER, payload: response.data });
  };
