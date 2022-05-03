import React, { Component } from 'react';
import { Modal, Row, Col } from 'react-bootstrap';

export class Edit_App extends Component {
    constructor(props){
        super(props);
        this.state = {app: [] };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API + 'Appointment' , {
            method: 'PUT',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                appointmentid: event.target.appointmentid.value,
                username: event.target.username.value,
                uselastname: event.target.uselastname.value,
                useremail: event.target.useremail.value,
                userphone: event.target.userphone.value,
                appointmentdate: event.target.appointmentdate.value,
                departmentid: event.target.departmentid.value,
                doctorid: event.target.doctorid.value
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
                            Edit Appointments
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col>
                            <form action="" method="put" onSubmit={this.handleSubmit}  className="">
                            <div className="row">
                            <div className="col-md-4 form-group">
                                    <input type="text" name="appointmentid" className="form-control" id="appointmentid" 
                                           required disabled defaultValue={this.props.appointmentid} 
                                           placeholder="appointmentid" data-rule="minlen:4"/>
                                    <div className="validate"></div>
                                </div>
                                <div className="col-md-4 form-group">
                                    <input type="text" name="username" className="form-control" id="username" 
                                           required defaultValue={this.props.username} 
                                           placeholder="username" data-rule="minlen:4"/>
                                    <div className="validate"></div>
                                </div>
                                <div className="col-md-4 form-group mt-3 mt-md-0">
                                    <input type="text" className="form-control" name="uselastname" id="uselastname" 
                                           required defaultValue={this.props.uselastname} 
                                           placeholder="uselastname"/>
                                    <div className="validate"></div>
                                </div>
                                <div className="col-md-4 form-group mt-3 mt-md-0">
                                    <input type="tel" className="form-control" name="useremail" id="useremail" 
                                           required defaultValue={this.props.useremail} 
                                           placeholder="useremail" data-rule="minlen:4"/>
                                    <div className="validate"></div>
                                </div>
                                <div className="col-md-4 form-group mt-3 mt-md-0">
                                    <input type="tel" className="form-control" name="userphone" id="userphone" 
                                           required defaultValue={this.props.userphone} 
                                           placeholder="userphone" data-rule="minlen:4" 
                                           data-msg="Please enter at least 4 chars"/>
                                    <div className="validate"></div>
                                </div>
                                <div className="col-md-4 form-group mt-3 mt-md-0">
                                    <input type="date" name="appointmentdate" className="form-control datepicker" id="appointmentdate" 
                                           required defaultValue={this.props.appointmentdate}
                                           placeholder="Appointment Date" data-rule="minlen:4" 
                                           data-msg="Please enter at least 4 chars"/>
                                    <div className="validate"></div>
                                </div>
                                <div className="col-md-4 form-group mt-3 mt-md-0">
                                    <input type="text" className="form-control" name="departmentid" id="departmentid" 
                                           required defaultValue={this.props.departmentid} 
                                           placeholder="departmentid"/>
                                    <div className="validate"></div>
                                </div>
                                <div className="col-md-4 form-group">
                                    <input type="text" name="doctorid" className="form-control" id="doctorid" 
                                           required defaultValue={this.props.doctorid} 
                                           placeholder="doctorid" data-rule="minlen:4"
                                           data-msg="Please enter at least 4 chars"/>
                                    <div className="validate"></div>
                                </div>
                            </div>
                            <div className="text-center">
                                <button type="submit" 
                                        className="btn btn-block btn-outline-success mt-2">Edit Appointment</button>
                            </div>
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