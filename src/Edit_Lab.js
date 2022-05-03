import React, { Component } from 'react';
import { Modal, Row, Col } from 'react-bootstrap';

export class Edit_Lab extends Component {
    constructor(props){
        super(props);
        this.state = {labs: [] };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API + 'laboratori' , {
            method: 'PUT',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                laboratoriId: event.target.laboratoriId.value,
                llojianalizes: event.target.llojianalizes.value,
                cmimianalizes: event.target.cmimianalizes.value,
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
                            Add Lab
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col>
                            <form className="p-5  my-3 " method="put" onSubmit={this.handleSubmit}>
                            <div className="form-group text-left" controlid='laboratoriId'>
                                <input type="text" name="laboratoriId" className="form-control" 
                                       required disabled defaultValue={this.props.laboratoriId} 
                                       placeholder="laboratoriId"/>
                            </div>
                            <div className="form-group text-left" controlid='llojianalizes'>
                                <input type="text" name="llojianalizes" className="form-control" 
                                       required defaultValue={this.props.llojianalizes} 
                                       placeholder="llojianalizes"/>
                            </div>
                            <div className="form-group text-left" controlid='cmimianalizes'>
                                <input type="text" name="cmimianalizes" className="form-control" 
                                       required defaultValue={this.props.cmimianalizes} 
                                       placeholder="cmimianalizes"/>
                            </div>
                            <button type="submit" className="btn btn-block btn-outline-success mt-2" 
                                    name="register">Add Lab</button>
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