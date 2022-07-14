import React from 'react';
import { useState, useEffect } from 'react';
import apiClient from '../services/ApiClient';
import { Link, useParams } from "react-router-dom";


const TestResults = () => {
  const testId = useParams().id;

  const [results, setResults] = useState([]);

  const getTestHook = () => {
    const run = async () => {
      try {
        const test = await apiClient.getTest(testId);
        console.log("test: ", test);
        setResults(test)
      } catch (err) {
        console.log(err);
      }
    }
    run();
  }

  useEffect(getTestHook, [])

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

export default TestResults;
