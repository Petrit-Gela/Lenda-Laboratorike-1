import React, { Component } from 'react';
import { Modal, Row, Col } from 'react-bootstrap';

export class Add_Room extends Component {
    constructor(props){
        super(props);
        this.state = {rooms: [] };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API + 'room' , {
            method: 'POST',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                nrdhomes: event.target.nrdhomes.value,
                kapaciteti: event.target.kapaciteti.value,
                departamenti: event.target.departamenti.value,
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
                            Add Room
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col>
                            <form className="p-5  my-3 " method="post" onSubmit={this.handleSubmit}>
                            <div className="form-group text-left" controlid='nrdhomes'>
                                <input type="text" name="nrdhomes" className="form-control" 
                                       required defaultValue={this.props.nrdhomes} 
                                       placeholder="Numri i dhomes..."/>
                            </div>
                            <div className="form-group text-left" controlid='kapaciteti'>
                                <input type="text" name="kapaciteti" className="form-control" 
                                       required defaultValue={this.props.kapaciteti} 
                                       placeholder="Kapaciteti..."/>
                            </div>
                            <div className="form-group text-left" controlid='departamenti'>
                                <textarea type="textarea" name="departamenti" className="form-control" 
                                          required defaultValue={this.props.departamenti} 
                                          placeholder="Departamenti..."/>
                            </div>
                            <button type="submit" className="btn btn-block btn-outline-success mt-2" 
                                    name="register">Add Room</button>
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