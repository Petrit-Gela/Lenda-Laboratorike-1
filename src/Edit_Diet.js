import React, { Component } from 'react';
import { Modal, Row, Col } from 'react-bootstrap';

export class Edit_Diet extends Component {
    constructor(props){
        super(props);
        this.state = {diets: [] };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API + 'diets' , {
            method: 'PUT',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                dietid: event.target.dietid.value,
                diettype: event.target.diettype.value,
                startdate: event.target.startdate.value,
                enddate: event.target.enddate.value,
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
                            Edit Diets
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col>
                            <form className="p-5  my-3 " method="put" onSubmit={this.handleSubmit}>
                            <div className="form-group text-left" controlid='dietid'>
                                <input type="text" name="dietid" className="form-control" 
                                       required disabled defaultValue={this.props.dietid} 
                                       placeholder="dietid"/>
                            </div>
                            <div className="form-group text-left" controlid='diettype'>
                                <input type="text" name="diettype" className="form-control" 
                                       required defaultValue={this.props.diettype} 
                                       placeholder="diettype"/>
                            </div>
                            <div className="form-group text-left" controlid='startdate'>
                                <input type="text" name="startdate" className="form-control" 
                                       required defaultValue={this.props.startdate} 
                                       placeholder="startdate"/>
                            </div>
                            <div className="form-group text-left" controlid='enddate'>
                                <textarea type="textarea" name="enddate" className="form-control" 
                                          required defaultValue={this.props.enddate} 
                                          placeholder="enddate"/>
                            </div>
                            <button type="submit" className="btn btn-block btn-outline-success mt-2" 
                                    name="edit">Edit Diets</button>
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