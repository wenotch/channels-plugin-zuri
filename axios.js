// import React from "react";
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://intense-inlet-16740.herokuapp.com/'
});

export default instance;
