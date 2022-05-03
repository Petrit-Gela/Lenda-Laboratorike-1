import React, { Component } from 'react';
import patient from "./img/patient.png";
import { ButtonToolbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { Add_Nur } from './Add_Nur';
import { Edit_Nur } from './Edit_Nur';

export class Nurse extends Component {

    constructor(props) {
        super(props);
        this.state = { nurs: [], addModalShow: false, editModalShow: false }
    }

    refreshList() {
        fetch(process.env.REACT_APP_API + 'Nurse')
            .then(response => response.json())
            .then(data => {
                this.setState({ nurs: data });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    deleteNur(id){
        if(window.confirm('Are you sure?')){
            fetch(process.env.REACT_APP_API+'nurse/'+id,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }


    render() {
        const { nurs, id, name, lastname, birthday, email } = this.state;
        let addModalClose = () => this.setState({ addModalShow: false });
        let editModalClose = () => this.setState({ editModalShow: false });
      
        return (
            <section id="nurse" class="py-5 mt-5">

                <div class="row mt-5">
                {nurs.map(nur =>
                    <div class="col-xs-12 col-sm-6 col-md-4" key={nur.id}>
                        <div class="image-flip" >
                            <div class="mainflip flip-0">
                                <div class="frontside">
                                    <div class="card">
                                        <div class="card-body text-center">
                                            <p><img class=" img-fluid" src={patient}></img></p>
                                            <h5 class="card-title">Name: {nur.name}</h5>
                                            <h5 class="card-title">Lastname: {nur.lastname}</h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="backside">
                                    <div class="card">
                                        <div class="card-body text-center mt-4">
                                            <h5 class="card-title">Email: {nur.email}</h5>
                                            <p class="card-title">Phone Number: {nur.phone}</p>
                                            <p class="card-title">Birthday: {nur.birthday}</p>
                                            

                                            <Link className="btn btn-outline-success btn-sm" role="button"
                                            onClick={() => this.setState({
                                                editModalShow: true,
                                                id: nur.id,name: nur.name, lastname: nur.lastname, birthday: nur.birthday, phone: nur.phone, email: nur.email
                                            })}
                                        >Edit
                                        </Link>
                                        <Link className="btn btn-outline-danger btn-sm" role="button"
                                            onClick={() => this.deleteNur(nur.id)}
                                        >Delete
                                        </Link>
                                        <Edit_Nur show={this.state.editModalShow}
                                            onHide={editModalClose}
                                            id={id}
                                            name={name}
                                            lastname={lastname}
                                            birthday={birthday}
                                            email={email} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                )}
                 {/* <ButtonToolbar>
                        <Link className="btn btn-outline-info btn-block" onClick={() => this.setState({ addModalShow: true })} role="button">Add Nurse</Link>
                        <Add_Nur show={this.state.addModalShow}
                            onHide={addModalClose} />
                    </ButtonToolbar> */}
                </div>
            </section >
        )
    }
}