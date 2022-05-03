import React, { Component } from 'react';
import { Modal, Row, Col } from 'react-bootstrap';

export class Edit_Meds extends Component {
    constructor(props){
        super(props);
        this.state = {meds: [] };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API + 'Medikamentet' , {
            method: 'PUT',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                medikamentiid: event.target.medikamentiid.value,
                emri: event.target.emri.value,
                doktoriname: event.target.doktoriname.value,
                doktorilastname: event.target.doktorilastname.value,
                cmimi: event.target.cmimi.value
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
                            Edit Medication
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col>
                            <form className="p-5  my-3 " method="put" onSubmit={this.handleSubmit}>
                            <div className="form-group text-left" controlid='medikamentiid'>
                                        <input type="text" name="medikamentiid" className="form-control" 
                                               required disabled defaultValue={this.props.medikamentiid} 
                                               placeholder="Medication Name..."/>
                                    </div>
                                    <div className="form-group text-left" controlid='emri'>
                                        <input type="text" name="emri" className="form-control" 
                                               required defaultValue={this.props.emri} 
                                               placeholder="Medication Name..."/>
                                    </div>
                                    <div className="form-group text-left" controlid='doktoriname'>
                                        <input type="text" name="doktoriname" className="form-control" 
                                               required defaultValue={this.props.doktoriname} 
                                               placeholder="Doctor's Name..."/>
                                    </div>
                                    <div className="form-group text-left" controlid='doktorilastname'>
                                        <textarea type="textarea" name="doktorilastname" className="form-control" 
                                                  required defaultValue={this.props.doktorilastname} 
                                                  placeholder="Doctor's Lastname..."/>
                                    </div>
                                    <div className="form-group text-left" controlid='cmimi'>
                                        <textarea type="textarea" name="cmimi" className="form-control" 
                                                  required defaultValue={this.props.cmimi} 
                                                  placeholder="Cmimi..."/>
                                    </div>
                                    <button type="submit" className="btn btn-block btn-outline-success mt-2" 
                                            name="register">Edit Medication</button>
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