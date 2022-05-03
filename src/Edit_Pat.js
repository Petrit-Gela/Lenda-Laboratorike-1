import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';

export class Edit_Pat extends Component {
    constructor(props){
        super(props);
        this.state = {pats: [] };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    

    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API + 'register' , {
            method: 'PUT',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                id: event.target.id.value,
                name: event.target.name.value,
                lastname: event.target.lastname.value,
                birthday: event.target.birthday.value,
                phone: event.target.phone.value,
                email: event.target.email.value,
            })
        })
            .then(res => res.json())
            .then((result) => {
                alert(result);
            },
             (error) => {
                 alert('Failed');
             })
            
    }

    render() {
        return (
            <div className="container">

                <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Edit Patient
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                    <Row>
                            <Col>
                            <form className="p-5  my-3 " method="put" onSubmit={this.handleSubmit}>
                            <div className="form-group text-left" controlid='id'>
                                <input type="text" name="id" className="form-control" 
                                       required disabled defaultValue={this.props.id} 
                                       placeholder="id"/>
                            </div>
                            <div className="form-group text-left" controlid='name'>
                                <input type="text" name="name" className="form-control" 
                                       required defaultValue={this.props.name} 
                                       placeholder="name"/>
                            </div>
                            <div className="form-group text-left" controlid='lastname'>
                                <input type="text" name="lastname" className="form-control" 
                                       required defaultValue={this.props.lastname} 
                                       placeholder="lastame"/>
                            </div>
                            <Form.Group controlId="birthday">
                        <Form.Label>Patients Birthday:</Form.Label>
                        <Form.Control 
                        type="date"
                        name="birthday"
                        required
                        placeholder="birthday"/>
                        </Form.Group>
                        <div className="form-group text-left" controlid='phone'>
                                <input type="text" name="phone" className="form-control" 
                                       required defaultValue={this.props.phone} 
                                       placeholder="phone"/>
                            </div>
                            <div className="form-group text-left" controlid='email'>
                                <input type="text" name="email" className="form-control" 
                                       required defaultValue={this.props.email} 
                                       placeholder="email"/>
                            </div>
                            <button type="submit" className="btn btn-block btn-outline-success mt-2" 
                                    name="register">Edit Patient</button>                                            
                        </form>
                            </Col>
                        </Row>
                    </Modal.Body>

                    <Modal.Footer>
                        <button className="btn btn-block btn-outline-secondary" 
                                onClick={this.props.onHide}>Close</button>
                    </Modal.Footer>

                </Modal>

            </div>
        )
    }

}
