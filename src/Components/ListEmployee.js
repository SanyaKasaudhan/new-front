import React, { Component } from 'react';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';

import { Link } from 'react-router-dom';


export default class ListEmployee extends Component {

constructor(props) {
super(props);
this.state = {
employees: []
}
}

componentDidMount = () => {
this.getEmployeeList();
}
getEmployeeList() {
    axios.get('http://localhost:4180/employees')
    .then((response) => {
    console.log(response);
    this.setState({
    employees: response.data
    });
    })
    .catch((error) => {
    console.log(error);
    })
    }
    render() {
    const { employees } = this.state;
    return (
    <div>
    <Table responsive>
    <thead>
    <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th></th>
    </tr>
    </thead>
    <tbody>
    {
    employees && employees.map((employee, i) => {
    return (
    <tr key={i}>
    <td>{i}</td>
    <td>{employee.firstName}</td>
    <td>{employee.lastName}</td>
    <td>{employee.email}</td>
    <td>
    <Link to={"editemployee/" + employee._id} className="btn btn-primary">Edit</Link>
    </td>
    </tr>
    )
    })
    }
    </tbody>
    </Table>
    </div>
    );
    } 
    }
