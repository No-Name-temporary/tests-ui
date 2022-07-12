import { Link } from "react-router-dom";

const Home = () => {

	return (
		<div>
			<Link to="/CreateTest">
				<button>Create New</button>
			</Link>
			<table>
				<thead>   
						<th>Name</th> 
						<th>Last Result</th> 
				</thead>
				<tbody>    
						<tr>    
								<td>test results here</td>   
								<td>PASS</td>
						</tr>
				</tbody>
			</table>
		</div>
	)
}


export default Home;
