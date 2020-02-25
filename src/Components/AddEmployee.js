import React, { Component } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap';
import Axios from 'axios';
export default class AddEmployee extends Component {
    constructor(props){
        super(props);
        this.state={
            firstName: '',
            lastName: '',
            email: ''
        }
    }
    handleChange =(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        const{firstName,lastName,email}=this.state;
        Axios.post('http://localhost:4180/employees/addEmployee',{
            firstName:firstName,
            lastName: lastName,
            email:email
        })
        .then((response)=>{
            console.log(response);
            this.props.history.push('/');
        })
        .catch((error)=>{
            console.log(error);
        });
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
                                        <Button type="submit" onClick={this.handleSubmit}>add employee</Button>
                                    </center>
                                </Row>
                            </Form.Group>
                </Form>
            </div>
        )
    }
}
