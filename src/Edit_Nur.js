import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form, Image } from 'react-bootstrap';

export class Edit_Nur extends Component {
    constructor(props){
        super(props);
        this.state = {nurs: [] };
        this.handleSubmit = this.handleSubmit.bind(this);
      //  this.handleFileSelected=this.handleFileSelected.bind(this);
    }
    
    // NursePhotoFile = "anonymous.png";
    // imagesrc = process.env.REACT_APP_PHOTOPATH+this.NursePhotoFile;

    // componentDidMount(){
    //     fetch(process.env.REACT_APP_API+'nurses')
    //     .then(response=>response.json())
    //     .then(data=>{
    //         this.setState({nurs:data});
    //     });
    // }

    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API + 'nurse' , {
            method: 'PUT',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                id: event.target.id.value,
                name: event.target.name.value,
                lastname: event.target.lastname.value,
                birthday: event.target.birthday.value,
                phone: event.target.phone.value,
                email: event.target.email.value,
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
    // handleFileSelected(event){
    //     event.preventDefault();
    //     this.NursePhotoFile=event.target.files[0].name;
    //     const formData = new FormData();
    //     formData.append(
    //         "myFile",
    //         event.target.files[0],
    //         event.target.files[0].name
    //     );

    //     fetch(process.env.REACT_APP_API+'Nurse/SaveFile',{
    //         method:'POST',
    //         body:formData
    //     })
    //     .then(res=>res.json())
    //     .then((result)=>{
    //         this.imagesrc=process.env.REACT_APP_PHOTOPATH+result;
    //     },
    //     (error)=>{
    //         alert('Failed');
    //     })
        
    // }

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
                            Edit Nurse
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                    <Row>
                            <Col>
                            <form className="p-5  my-3 " method="put" onSubmit={this.handleSubmit}>
                            <div className="form-group text-left" controlid='id'>
                                <input type="text" name="id" className="form-control" 
                                       required disabled defaultValue={this.props.id} 
                                       placeholder="id"/>
                            </div>
                            <div className="form-group text-left" controlid='name'>
                                <input type="text" name="name" className="form-control" 
                                       required defaultValue={this.props.name} 
                                       placeholder="name"/>
                            </div>
                            <div className="form-group text-left" controlid='lastname'>
                                <input type="text" name="lastname" className="form-control" 
                                       required defaultValue={this.props.lastname} 
                                       placeholder="lastame"/>
                            </div>
                            <Form.Group controlId="birthday">
                        <Form.Label>Nurses Birthday:</Form.Label>
                        <Form.Control 
                        type="date"
                        name="birthday"
                        required
                        placeholder="birthday"/>
                        </Form.Group>
                        <div className="form-group text-left" controlid='phone'>
                                <input type="text" name="phone" className="form-control" 
                                       required defaultValue={this.props.phone} 
                                       placeholder="phone"/>
                            </div>
                            <div className="form-group text-left" controlid='email'>
                                <input type="text" name="email" className="form-control" 
                                       required defaultValue={this.props.email} 
                                       placeholder="email"/>
                            </div>
                            <button type="submit" className="btn btn-block btn-outline-success mt-2" 
                                    name="register">Update Nurse</button>                       
                       
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
