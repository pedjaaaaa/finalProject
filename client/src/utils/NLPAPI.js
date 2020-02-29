import axios from "axios";
const BASEURL = "https://smartchat12.cognitiveservices.azure.com/";
const APIKey = "3fb3da1ec5674af9a5b32c280e6cf6db";


export default {
  searchNLP: function(content) {
    return axios.get(BASEURL + content + APIKey);
  }
};
