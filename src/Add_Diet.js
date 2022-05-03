import React, { Component } from 'react';
import { Modal, Row, Col } from 'react-bootstrap';

export class Add_Diet extends Component {
    constructor(props){
        super(props);
        this.state = {diets: [] };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API + 'diets' , {
            method: 'POST',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
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
                            Add Diets
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col>
                            <form className="p-5  my-3 " method="post" onSubmit={this.handleSubmit}>
                            <div className="form-group text-left" controlid='diettype'>
                                <input type="text" name="diettype" className="form-control" 
                                       required defaultValue={this.props.diettype} 
                                       placeholder="Diet Type..."/>
                            </div>
                            <div className="form-group text-left" controlid='startdate'>
                                <input type="text" name="startdate" className="form-control" 
                                       required defaultValue={this.props.startdate} 
                                       placeholder="Start Date..."/>
                            </div>
                            <div className="form-group text-left" controlid='enddate'>
                                <textarea type="text" name="enddate" className="form-control" 
                                          required defaultValue={this.props.enddate} 
                                          placeholder="End Date..." />
                            </div>
                            <button type="submit" className="btn btn-block btn-outline-success mt-2" 
                                    name="edit">Add Diets</button>
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