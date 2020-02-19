import axios from "axios";

export const login = (values, history) => {
  return axios({
    method: "POST",
    url: "http://localhost:3002/authors/login",
    data: values
  }).then(response => {
    console.log(response);
    
    if (response.status === 200) {
      localStorage.setItem("token", response.data.token);
      history.push("/blogs")
    }
  }).catch(error=>{
    console.log(error);
    
  })
};

export const signup = (values, history) => {
  return axios({
    method: "POST",
    url: "http://localhost:3002/authors/",
    data: values
  }).catch(error=>{
    console.log(error);
    
  })
};
