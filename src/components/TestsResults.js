import React from 'react';
import { useState, useEffect } from 'react';
import apiClient from '../services/ApiClient';
import { Link } from "react-router-dom";



const TestsResults = () => {
  const [results, setResults] = useState([]);

  //assuming the response body will be an array of JSON objects 
  useEffect( () => {
    const run = async () => {
      try { 
        const testResults = await apiClient.getTests();
        setResults(testResults);
      } catch (err) {
        console.log(err)
      }
    };
    run();
  }, [])



  return (
    <div>
      <Link to="/">
        <button>Home</button>
      </Link>
      <h1>TestsResults</h1>

    {results.map((item)=>{
      return (
        <div key={item.id}> {JSON.stringify(item)}</div>
      )
    })}
    </div>
  )
}

export default TestsResults;