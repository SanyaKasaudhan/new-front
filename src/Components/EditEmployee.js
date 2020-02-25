import React, { Component } from 'react'
import Axios from 'axios';

import {  Row, Col, Form, Button } from 'react-bootstrap';
export default class EditEmployee extends Component {
    constructor(props){
        super(props);
        this.state={
            firstName: '',
            lastName: '',
            email: ''
        }
    }
    componentDidMount= ()=>{
        this.getEmployeeById() 
        }
        getEmployeeById() {
            Axios.get('http://localhost:4180/employees/editEmployee/'+this.props.match.params.id)
            .then((response)=>{
                this.setState({
                    firstName:response.data.firstName,
                    lastName:response.data.lastName,
                    email:response.data.email
                })
            })
            .catch((error)=>{
                console.log(error);
            })
        }
        handleChange=(event) =>{
           this.setState({ [event.target.name]:event.target.value});
        }
        handleSubmit=(event) =>{
            event.preventDefault();
            const{firstName,lastName,email}=this.state;
            Axios.post('http://localhost:4180/employees/updateEmployee/'+this.props.match.params.id,{
                firstName: firstName,
                lastName: lastName,
                email: email
            })
            .then((response)=>{
                console.log(response);
                this.props.history.push('/');
            })
            .catch((error)=>{
                console.log(error)
            })
       
    }
    render() {
        return (
            <div>
                 <Form>
                    <Form.Group>
                                <Row className="justify-content-md-center pt-4">
                                    <Col  lg={4}>
                                        <Form.Label>First Name <br/></Form.Label>
                                    </Col>
                                    
                                    <Col lg={8}>
                                        <Form.Control name="firstName" type="text" value={this.state.firstName} onChange={this.handleChange} />
                                    
                                    </Col>    
                                </Row>
                            </Form.Group>
                            <Form.Group>
                                <Row className="justify-content-md-center pt-4">
                                    <Col lg={4}>
                                        <Form.Label>Last Name <br/></Form.Label>
                                    </Col>
                                    <Col lg={8}>
                                        <Form.Control name="lastName" type="text" value={this.state.lastName} onChange={this.handleChange} />
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group>
                                <Row className="justify-content-md-center pt-4">
                                    <Col lg={4}>
                                        <Form.Label>Email<br/></Form.Label>
                                    </Col>
                                    <Col lg={8}>
                                        <Form.Control name="email" type="email" value={this.state.email} onChange={this.handleChange}></Form.Control>
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group>
                                <Row className="justify-content-md-center pt-4">
                                    <center>
                                        <Button type="submit" onClick={this.handleSubmit}>edit EMPLOYEE</Button>
                                    </center>
                                </Row>
                            </Form.Group>
                </Form>
            </div>
        );
}
}
