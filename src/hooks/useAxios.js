import React, { useState } from 'react';
import uuid from "uuid";
import axios from "axios";

const useAxios = (key, baseURL) => {
    const [responses, setResponses] = useState([]);

    const addResponseData = async (formatter = data => data, restOfURL = "") => {
        const response = await axios.get(`${baseURL}${restOfURL}`);
        console.log(`resofURL: ${restOfURL}`)
        console.log(`baseURL: ${baseURL}`)
        console.log(response.data)
        
        setResponses(data => [...data, formatter(response.data)]);
    };

    const clearResponses = () => setResponses([]);

    return [responses, addResponseData, clearResponses]
}

export default useAxios;