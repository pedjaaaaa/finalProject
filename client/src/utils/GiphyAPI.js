import axios from "axios";
const BASEURL = "api.giphy.com/v1/gifs/search";
const APIKey = "J5dNYggytT7tnI3dF9pmQCVZpg8Btui3";

export default {
  search: function(key) {
    return axios.get(BASEURL + key + APIKey);
  }
};
