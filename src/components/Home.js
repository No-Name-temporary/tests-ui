import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import apiClient from "../services/ApiClient";
import TestRow from "./TestRow";

const Home = ({ scheduledTests }) => {
  const [tests, setTests] = useState([]);

  const getAllTestsHook = () => {
    const run = async () => {
      const tests = await apiClient.getTests()
      setTests(tests);
    }
    run();
  }

  useEffect(getAllTestsHook, [])

  return (
    <div>
      <Link to="/create/test">
        <button>Create New</button>
      </Link>
      <table>
        <thead>
          <tr>  
            <th>Name</th>
            <th>URL</th> 
          </tr> 
        </thead>
        <tbody>
            { tests.map(test => <TestRow key={test.id} data={test}/>)}   
        </tbody>
      </table>
    </div>
  )
}


export default Home;
