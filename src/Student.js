import React, { Fragment } from 'react';
import Navbar from './Navbar1';
import axios from 'axios';

function createData( name, rollno,division) {
	return { name, rollno,division };
}
export default function Organization() {
	const [ TopicArray, setTopicArray ] = React.useState([]);
	React.useEffect(() => {
		axios
			.get('https://crudcrud.com/api/bb5df2a9d3a54c0383cd3f9e26482f75/students')
			.then((response) => {
				if (response.status === 200) {
					response.data.forEach((obj) => {
						setTopicArray((oldArray) => [
							...oldArray,
							createData( obj['name'], obj['rollno'], obj['division'])
						]);
					});
				}
			})
			.catch((errors) => {
				console.log(errors);
			});
	}, []);

	return (
		<Fragment>
			<Navbar />
			<div className="about_div  bg-light">
				<h2>Student List</h2>
				<div className="about_center__div container my-5">
					<div className="row mx-auto text-center">
					    <div className="col-4">Name</div>
						<div className="col-4">Rollno</div>
						<div className="col-4">division</div>
					</div>
					<br />
					<hr />
					<br />
					{TopicArray.map((item, index) => (
						<Fragment>
							<div className="row mx-auto text-center">
								<div className="col-4">{item.Name}</div>
								<div className="col-4">{item.rollno}</div>
								<div className="col-4">{item.division}</div>
							</div>
							<br />
							<hr />
							<br />
						</Fragment>
					))}
				</div>
			</div>
		</Fragment>
	);
}
