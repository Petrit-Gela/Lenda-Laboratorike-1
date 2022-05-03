import React, { Component } from 'react';
import {Modal, Row, Col} from 'react-bootstrap';

export class Add_DietFood extends Component{
    constructor(props){
        super(props);
        this.state = {difoods : []}
    }
     
    refreshList(){
        fetch(process.env.REACT_APP_API + 'DietFood')
        .then(response => response.json())
        .then(data => {
            this.setState({difoods : data});
        });
    }

    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+ 'DietFood', {
            method: 'POST',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                dietName: event.target.dietName.value,
                allowedFoods: event.target.allowedFoods.value,
                notallowedFoods: event.target.notallowedFoods.value,
                proteins: event.target.proteins.value,


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

            componentDidMount(){
                this.refreshList();
            }

            componentDidUpdate(){
                this.refreshList();
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
                                Healthy diet & Eating
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
    
                            <Row>
                                <Col>
                                    <form className="p-5  my-3 " method="post" onSubmit={this.handleSubmit}>
                                        <div className="form-group text-left" controlid='dietName'>
                                            <input type="text" name="dietName" className="form-control" 
                                                   required defaultValue={this.props.dietName} 
                                                   placeholder="Diet's Name..."/>
                                        </div>
                                        <div className="form-group text-left" controlid='allowedFoods'>
                                            <input type="text" name="allowedFoods" className="form-control" 
                                                   required defaultValue={this.props.allowedFoods} 
                                                   placeholder="Allowed Foods..."/>
                                        </div>
                                        <div className="form-group text-left" controlid='notallowedFoods'>
                                            <textarea type="textarea" name="notallowedFoods" className="form-control" 
                                                      required defaultValue={this.props.notallowedFoods} 
                                                      placeholder="Not Allowed Foods..."/>
                                        </div>
                                        <div className="form-group text-left" controlid='proteins'>
                                            <textarea type="textarea" name="proteins" className="form-control" 
                                                      required defaultValue={this.props.proteins} 
                                                      placeholder="Proteins..."/>
                                        </div>
                                        <button type="submit" className="btn btn-block btn-outline-success mt-2" 
                                                name="register">Add</button>
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
