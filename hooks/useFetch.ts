import { RAPID_API_KEY } from '../.env';
import { useState } from "react";
import axios from "axios";
// import  {RAPID_API_KEY}
// const axios = require("axios");

//  const rapidApiKey = RAPID_API_KEY;

const useFetch=(endpoint)=> {
 const [data, setData] = useState([]);
 const [isLoading, serIsLoading] = useState(false);
 const [error, setError] = useState(null);

const options = {
  method: "GET",
  url: `https://jsearch.p.rapidapi.com/${endpoint}`,
  headers: {
    "X-RapidAPI-Key":rapidApiKey,
    "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
  },
  params: {
    query: "Python developer in Texas, USA",
    page: "1",
    num_pages: "1",
  },
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}
}
