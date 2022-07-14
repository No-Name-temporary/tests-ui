import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CreateTest from "./components/CreateTest";
import { useState, useEffect } from 'react';
import apiClient from './services/ApiClient';

const App = () => {
  const [scheduledTests, setScheduledTests] = useState([])

 
  useEffect( () => {
    const populateScheduledTests = async () => {
      try { 
        const tests = await apiClient.getTests();
        setScheduledTests(tests);
      } catch (err) {
        console.log(err)
      }
    };

    populateScheduledTests();
  }, [])

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home scheduledTests={scheduledTests}/>}></Route>
        <Route index element={<Home scheduledTests={scheduledTests}/>}></Route>
        <Route path="/create/test" element={<CreateTest />}></Route>
      </Routes>
    </div>
  );
}


export default App;
