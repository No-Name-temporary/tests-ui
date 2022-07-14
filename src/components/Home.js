import { Link } from "react-router-dom";

const Home = ({ scheduledTests }) => {

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
          {scheduledTests.map((test, idx) => (
            <tr key={test.id}>
              <td>{test.name}</td>
              <td>{test.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}


export default Home;
