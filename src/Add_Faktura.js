import React, { Component } from 'react';
import { Modal, Row, Col } from 'react-bootstrap';

export class Add_Faktura extends Component {
    constructor(props){
        super(props);
        this.state = {fakt: [] };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API + 'Fatura' , {
            method: 'POST',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                vizita: event.target.vizita.value,
                totali: event.target.totali.value,
                pacientiname: event.target.pacientiname.value,
                pacientilastname: event.target.pacientilastname.value
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
                            Add Faktura
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col>
                            <form className="p-5  my-3 " method="post" onSubmit={this.handleSubmit}>
                            <div className="form-group text-left" controlid='vizita'>
                                <input type="text" name="vizita" className="form-control" 
                                       required defaultValue={this.props.vizita} 
                                       placeholder="Vizita..."/>
                            </div>
                            <div className="form-group text-left" controlid='totali'>
                                <input type="text" name="totali" className="form-control" 
                                       required defaultValue={this.props.totali} 
                                       placeholder="Totali..."/>
                            </div>
                            <div className="form-group text-left" controlid='pacientiname'>
                                <textarea  type="text" name="pacientiname" className="form-control" 
                                           required defaultValue={this.props.pacientiname} 
                                           placeholder="Emri i pacienti..."/>
                            </div>
                            <div className="form-group text-left" controlid='pacientilastname'>
                                <textarea  type="text" name="pacientilastname" className="form-control" 
                                           required defaultValue={this.props.pacientilastname} 
                                           placeholder="Mbiemri i pacientit..."/>
                            </div>
                            <button type="submit" className="btn btn-block btn-outline-success mt-2" 
                                    name="edit">Add Faktura</button>
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