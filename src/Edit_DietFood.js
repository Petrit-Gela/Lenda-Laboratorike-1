import React, { Component } from 'react';
import { Modal, Row, Col } from "react-bootstrap";
/*import { Component } from "react";*/

export class Edit_DietFood extends Component {
    constructor(props){
        super(props);
        this.state={difoods: [] };
        this.handleSubmit= this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'DietFood', {
            method: 'PUT',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                dietFoodid: event.target.dietFoodid.value,
                dietName: event.target.dietName.value,
                allowedFoods: event.target.allowedFoods.value,
                notallowedFoods: event.target.notallowedFoods.value,
                proteins: event.target.proteins.value,
                PhotoFileName:this.PhotoFileName
            
            
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
    render(){
        return(
            <div className="container">
                 <Modal
                 {...this.props}
                 size="lg"
                 aria-labelledby="contained-modal-title-vcenter"
                 centered
                 
                 >

                     <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Healthy Diet Guide
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col>
                            <form className="p-5  my-3 " method="put" onSubmit={this.handleSubmit}>                                        
                                    <b>ID</b>
                                    <div className="form-group text-left" controlid='dietFoodid'>
                                        <input type="text" name="dietFoodid" className="form-control" 
                                               required disabled defaultValue={this.props.dietFoodid} 
                                               placeholder="..."/>
                                    </div>
                                    <b>Diet Name</b>
                                    <div className="form-group text-left" controlid='emri'>
                                        <input type="text" name="dietName" className="form-control" 
                                               required defaultValue={this.props.dietName} 
                                               placeholder="Diet Name..."/>
                                    </div>
                                    <b>Allowed Foods</b>
                                    <div className="form-group text-left" controlid='allowedFoods'>
                                        <input type="text" name="allowedFoods" className="form-control" 
                                               required defaultValue={this.props.allowedFoods} 
                                               placeholder="Allowed Foods..."/>
                                    </div>
                                    <b>Not allowed foods</b>
                                    <div className="form-group text-left" controlid='notallowedFoods'>
                                        <textarea type="textarea" name="notallowedFoods" className="form-control" 
                                                  required defaultValue={this.props.notallowedFoods} 
                                                  placeholder="Not allowed foods..."/>
                                    </div>
                                    <b>Proteins</b>
                                    <div className="form-group text-left" controlid='proteins'>
                                        <textarea type="textarea" name="proteins" className="form-control" 
                                                  required defaultValue={this.props.proteins} 
                                                  placeholder="Proteins..."/>
                                    </div>
                                    <button type="submit" className="btn btn-block btn-outline-success mt-2" 
                                            name="register">Edit</button>
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
