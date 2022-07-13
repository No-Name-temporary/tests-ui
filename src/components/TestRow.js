import { Link } from "react-router-dom";

const TestRow = ({ data} ) => {
  return (
    <tr>    
      <Link to={`/tests/${data.id}`}>
        <td>{data.name}</td>
        <td>{data.url}</td>   
      </Link>
    </tr>
  )
}

export default TestRow;
