import React, { Component } from 'react';
import { Modal, Row, Col } from 'react-bootstrap';

export class Edit_Doc extends Component {
    constructor(props) {
        super(props);
        this.state = { docs: [] };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch(process.env.REACT_APP_API + 'doctorscardsdata', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                DoctorId: event.target.DoctorId.value,
                DoctorName: event.target.DoctorName.value,
                Department: event.target.Department.value
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
                            Edit Doctor
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col>
                                <form className="p-5  my-3 " method="put" onSubmit={this.handleSubmit}>
                                    <div className="form-group text-left" controlid='DoctorId'>
                                        <input type="text" name="DoctorId" className="form-control" 
                                               required disabled defaultValue={this.props.DoctorId} 
                                               placeholder="DoctorId"/>
                                    </div>
                                    <div className="form-group text-left" controlid='DoctorName'>
                                        <input type="text" name="DoctorName" className="form-control" 
                                               required defaultValue={this.props.DoctorName} 
                                               placeholder="DoctorName"/>
                                    </div>
                                    <div className="form-group text-left" controlid='Department'>
                                        <input type="text" name="Department" className="form-control" 
                                               required defaultValue={this.props.Department} 
                                               placeholder="Department"/>
                                    </div>
                                    <button type="submit" className="btn btn-block btn-outline-success mt-2" 
                                            name="edit">Edit Doctor</button>
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