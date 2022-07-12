import { Link } from "react-router-dom";

const Home = () => {
/*
To do: 
- after receiving all the test from the server choose the latest
- display url and whther it passed or pailed

*/
  return (
    <div>
      <Link to="/CreateTest">
        <button>Create New</button>
      </Link>
      <Link to="/TestsResults">
        <button>Tests Results</button>
      </Link>
      <table>
        <thead>
          <tr>  
            <th>Name</th> 
            <th>Last Result</th> 
          </tr> 
        </thead>
        <tbody>    
            <tr>    
                <td>URL of latest tests</td>   
                <td>PASS</td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}


export default Home;
