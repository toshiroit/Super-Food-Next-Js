import axios from "axios";
import { BASE_API } from "../../constants/ApiLink";

const setHeader = (isAuthRequired, contentType, Authorization) => {
  if (isAuthRequired) {
    axios.defaults.headers.common["Authorization"] = Authorization;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
  axios.defaults.headers.common["Content-Type"] = contentType;
};
const createRequest = (method, url, body, isAuthRequired, contentType, Authorization) => {
  return axios({
    method: method,
    //url: BASE_API + url,
    url: url,
    data: body,
    headers: setHeader(isAuthRequired, contentType, Authorization),
  });
};

export const RequestServices = {
  get: (url, isAuthRequired, contentType = "application/json", authorization) => {
    return createRequest("GET", url, null, isAuthRequired, contentType, authorization);
  },
  post: (url, body, isAuthRequired, contentType = "application/json", authorization) => {
    return createRequest("POST", url, body, isAuthRequired, contentType, authorization);
  },
  put: (url, body, isAuthRequired, contentType = "application/json", authorization) => {
    return createRequest("PUT", url, body, isAuthRequired, contentType, authorization);
  },
  del: (url, isAuthRequired, contentType = "application/json", authorization) => {
    return createRequest("DELETE", url, null, isAuthRequired, contentType, authorization);
  },
};


export default RequestServices;
