import React, { Component } from 'react';
import {Button,Image, Modal, Row,Form, Col } from 'react-bootstrap';

export class Add_Dia extends Component {
    constructor(props){
        super(props);
        this.state = {dias: [] };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API + 'diagnoses' , {
            method: 'POST',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                patientsname: event.target.patientsname.value,
                diagnosename: event.target.diagnosename.value,
                diagnosedescription: event.target.diagnosedescription.value,
                nursesname: event.target.nursesname.value,
                doctorsname: event.target.doctorsname.value,
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
                            Add Diagnose
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col sm={6}>
                            <form className="p-5  my-3 " method="post" onSubmit={this.handleSubmit}>
                            <div className="form-group text-left" controlid='patientsname'>
                                <input type="text" name="patientsname" className="form-control" 
                                       required  defaultValue={this.props.patientsname} 
                                       placeholder="patientsname"/>
                            </div>
                            <div className="form-group text-left" controlid='diagnosename'>
                                <input type="text" name="diagnosename" className="form-control" 
                                       required defaultValue={this.props.diagnosename} 
                                       placeholder="diagnosename"/>
                            </div>                          
                            <div className="form-group text-left" controlid='diagnosedescription'>
                                <input type="text" name="diagnosedescription" className="form-control" 
                                       required defaultValue={this.props.diagnosedescription} 
                                       placeholder="diagnosedescription"/>
                            </div>
                            <div className="form-group text-left" controlid='nursesname'>
                                <input type="text" name="nursesname" className="form-control" 
                                       required defaultValue={this.props.nursesname} 
                                       placeholder="nursesname"/>
                            </div>
                            <div className="form-group text-left" controlid='doctorsname'>
                                <input type="text" name="doctorsname" className="form-control" 
                                       required defaultValue={this.props.doctorsname} 
                                       placeholder="doctorsname"/>
                            </div>
                            
                             <button type="submit" className="btn btn-block btn-outline-success mt-2" 
                                     name="register">Add Nurse</button>                                                  
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
