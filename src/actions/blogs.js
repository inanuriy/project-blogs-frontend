import axios from "axios";

const token = localStorage.getItem("token");
export const SET_BLOGS = "SET_BLOGS";

export const setBlog = payload => {
  return {
    type: SET_BLOGS,
    payload
  };
};

export const fetchBlogs = () => dispatch => {
  return axios({
    method: "GET",
    url: "http://localhost:3002/blogs",
    headers: { authorization: `Bearer ${token}` }
  }).then(response => {
    dispatch(setBlog(response.data.data));
  });
};
