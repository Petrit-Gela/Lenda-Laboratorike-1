import React, { Component } from 'react';
import { Modal, Row, Col } from 'react-bootstrap';

export class Add_Orari extends Component {
    constructor(props){
        super(props);
        this.state = {orar: [] };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API + 'orari' , {
            method: 'POST',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                Doktori: event.target.Doktori.value,
                dita: event.target.dita.value,
                Fillimi: event.target.Fillimi.value,
                Mbarimi: event.target.Mbarimi.value
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
                            Add Department
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col>
                            <form className="p-5  my-3 " method="post" onSubmit={this.handleSubmit}>
                            <div className="form-group text-left" controlid='Doktori'>
                                <input type="text" name="Doktori" className="form-control" 
                                       required defaultValue={this.props.Doktori} 
                                       placeholder="Doctor"/>
                            </div>
                            <div className="form-group text-left" controlid='dita'>
                                <input type="text" name="dita" className="form-control" 
                                       required defaultValue={this.props.dita} 
                                       placeholder="Days"/>
                            </div>
                            <div className="form-group text-left" controlid='Fillimi'>
                                <textarea type="text" name="Fillimi" className="form-control" 
                                          required defaultValue={this.props.Fillimi} 
                                          placeholder="Start"/>
                            </div>
                            <div className="form-group text-left" controlid='Mbarimi'>
                                <textarea  type="text" name="Mbarimi" className="form-control" 
                                           required defaultValue={this.props.Mbarimi} 
                                           placeholder="End"/>
                            </div>
                            <button type="submit" className="btn btn-block btn-outline-success mt-2" 
                                    name="register">Add Schedule</button>
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