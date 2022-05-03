import React, { Component } from 'react';
import { Modal, Row, Col } from 'react-bootstrap';

export class Add_Meds extends Component {

    constructor(props) {
        super(props);
        this.state = { meds: [] }
    }

    refreshList() {
        fetch(process.env.REACT_APP_API + 'Medikamentet')
            .then(response => response.json())
            .then(data => {
                this.setState({ meds: data });
            });
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch(process.env.REACT_APP_API + 'Medikamentet', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                emri: event.target.emri.value,
                doktorriname: event.target.doktorriname.value,
                doktorrilastname: event.target.doktorrilastname.value,
                cmimi: event.target.cmimi.value,
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

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
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
                            Add Medication
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col>
                                <form className="p-5  my-3 " method="post" onSubmit={this.handleSubmit}>
                                    <div className="form-group text-left" controlid='emri'>
                                        <input type="text" name="emri" className="form-control" 
                                               required defaultValue={this.props.emri} 
                                               placeholder="Medication Name..."/>
                                    </div>
                                    <div className="form-group text-left" controlid='doktorriname'>
                                        <input type="text" name="doktorriname" className="form-control" 
                                               required defaultValue={this.props.doktorriname} 
                                               placeholder="Doctor's Name..."/>
                                    </div>
                                    <div className="form-group text-left" controlid='doktorrilastname'>
                                        <textarea type="textarea" name="doktorrilastname" className="form-control" 
                                                  required defaultValue={this.props.doktorrilastname} 
                                                  placeholder="Doctor's Lastname..."/>
                                    </div>
                                    <div className="form-group text-left" controlid='cmimi'>
                                        <textarea type="textarea" name="cmimi" className="form-control" 
                                        required defaultValue={this.props.cmimi} 
                                        placeholder="Cmimi..."/>
                                    </div>
                                    <button type="submit" className="btn btn-block btn-outline-success mt-2" 
                                            name="register">Add Medication</button>
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