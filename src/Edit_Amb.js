import React, { Component } from 'react';
import { Modal, Row, Col } from 'react-bootstrap';

export class Edit_Amb extends Component {
    constructor(props){
        super(props);
        this.state = {ambs: [] };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API + 'Ambullanca' , {
            method: 'PUT',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                AmbullancaId: event.target.AmbullancaId.value,
                Targat: event.target.Targat.value,
                VozitesiName: event.target.VozitesiName.value,
                VozitesiLastname: event.target.VozitesiLastname.value,
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
                            Edit Ambullanca
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col>
                            <form className="p-5  my-3 " method="post" onSubmit={this.handleSubmit}>
                            <div className="form-group text-left" controlid='AmbullancaId'>
                                <input type="text" name="AmbullancaId" className="form-control" 
                                       required disabled defaultValue={this.props.AmbullancaId} 
                                       placeholder="AmbullancaId"/>
                            </div>
                            <div className="form-group text-left" controlid='Targat'>
                                <input type="text" name="Targat" className="form-control" 
                                       required defaultValue={this.props.Targat} 
                                       placeholder="Targat"/>
                            </div>
                            <div className="form-group text-left" controlid='VozitesiName'>
                                <input type="text" name="VozitesiName" className="form-control" 
                                       required defaultValue={this.props.VozitesiName} 
                                       placeholder="VozitesiName"/>
                            </div>
                            <div className="form-group text-left" controlid='VozitesiLastname'>
                                <textarea type="text" name="VozitesiLastname" className="form-control" 
                                       required defaultValue={this.props.VozitesiLastname} 
                                       placeholder="VozitesiLastname"/>
                            </div>
                            <button type="submit" className="btn btn-block btn-outline-success mt-2" 
                                    name="register">Edit Ambullanca</button>
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