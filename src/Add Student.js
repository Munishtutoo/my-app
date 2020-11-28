import React, { Component } from 'react';
import axios from "axios"; 

class SubmitForm extends Component {
  state = {
	name: '',
	rollno:'',
	division:'',
  };

handleSubmit = event => {
    event.preventDefault();
    const user = {
	  name: this.state.name,
	  rollno: this.state.rollno,
	  division: this.state.division
    }
    axios.post('https://crudcrud.com/api/bb5df2a9d3a54c0383cd3f9e26482f75/students', { user })
      .then(res=>{
        console.log(res);
        console.log(res.data);
      })
  }
handleChange = event =>{
	this.setState({ name: event.target.value});
	this.setState({ rollno: event.target.value});
	this.setState({ division: event.target.value});
  }
render() {
    return (
      <Container>
        <Header/>
        <form onSubmit = { this.handleSubmit }>
          <label>  Name:
            <input type = "text" name = "text" onChange= {this.handleChange}/>
          </label>
		  <label> Roll no:
            <input type = "text" name = "text" onChange= {this.handleChange}/>
          </label>
		  <label> Division:
            <input type = "text" name = "text" onChange= {this.handleChange}/>
          </label>
          <button type = "submit"> Add </button>
        </form>
    </Container>
    );
  }
}
export default AddStudent