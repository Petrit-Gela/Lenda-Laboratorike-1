import React, { Component } from 'react';
import { Modal, Row, Col } from 'react-bootstrap';

export class Edit_Dep extends Component {
    constructor(props){
        super(props);
        this.state = {deps: [] };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API + 'department' , {
            method: 'PUT',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                departamentid: event.target.departamentid.value,
                departmentname: event.target.departmentname.value,
                departmentrooms: event.target.departmentrooms.value,
                departmentdescription: event.target.departmentdescription.value,
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
                            Edit Department
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col>
                            <form className="p-5  my-3 " method="put" onSubmit={this.handleSubmit}>
                            <div className="form-group text-left" controlid='departamentid'>
                                <input type="text" name="departamentid" className="form-control" 
                                       required disabled defaultValue={this.props.departamentid} 
                                       placeholder="departmentid"/>
                            </div>
                            <div className="form-group text-left" controlid='departmentname'>
                                <input type="text" name="departmentname" className="form-control" 
                                       required defaultValue={this.props.departmentname} 
                                       placeholder="departmentname"/>
                            </div>
                            <div className="form-group text-left" controlid='departmentrooms'>
                                <input type="text" name="departmentrooms" className="form-control" 
                                       required defaultValue={this.props.departmentrooms} 
                                       placeholder="departmentrooms"/>
                            </div>
                            <div className="form-group text-left" controlid='departmentdescription'>
                                <textarea type="textarea" name="departmentdescription" className="form-control" 
                                          required defaultValue={this.props.departmentdescription} 
                                          placeholder="departmentdescription"/>
                            </div>
                            <button type="submit" className="btn btn-block btn-outline-success mt-2"
                                    name="edit">Edit Department</button>
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