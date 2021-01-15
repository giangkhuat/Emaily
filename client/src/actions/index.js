import axios from "axios";
import { FETCH_USER } from "./types";
// define action creater

// action creator returns a function
// redux-thunk sees the function, it will run the fucntion with 
// dispatch as an argument

export const fetchUser = () =>
  async function (dispatch) {
    // dispatch when we get response back
    const response = await axios.get("/api/current_user");
    console.log(response.data);
    dispatch({ type: FETCH_USER, payload: response.data });
  };

export const handleToken = (token) =>
  async function (dispatch) {
    // dispatch when we get response back
    const response = await axios.post("/api/stripe", token);
    dispatch({ type: FETCH_USER, payload: response.data });
  };



