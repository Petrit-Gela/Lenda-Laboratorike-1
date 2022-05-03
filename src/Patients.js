import React, { Component } from 'react';
import patient from "./img/patient.png";
import { Link } from "react-router-dom";
import { Edit_Pat } from './Edit_Pat';

export class Patients extends Component {

    constructor(props) {
        super(props);
        this.state = { pats: [] }
    }

    refreshList() {
        fetch(process.env.REACT_APP_API + 'register')
            .then(response => response.json())
            .then(data => {
                this.setState({ pats: data });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }
    deletePat(id){
        if(window.confirm('Are you sure?')){
            fetch(process.env.REACT_APP_API+'register/'+id,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }


    render() {
        const { pats, id, name, lastname, birthday, email } = this.state;
        let editModalClose = () => this.setState({ editModalShow: false });

        return (
            <section id="department" class="py-5 mt-5">

                <div class="row mt-5">
                {pats.map(pat =>
                    <div class="col-xs-12 col-sm-6 col-md-4" key={pat.id}>
                        <div class="image-flip" >
                            <div class="mainflip flip-0">
                                <div class="frontside">
                                    <div class="card">
                                        <div class="card-body text-center">
                                            <p><img class=" img-fluid" src={patient}></img></p>
                                            <h4 class="card-title">Name: {pat.name}</h4>
                                            <p class="card-title">Lastname: {pat.lastname}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="backside">
                                    <div class="card">
                                        <div class="card-body text-center mt-4">
                                            <h4 class="card-title">Birthday: {pat.birthday}</h4>
                                            <p class="card-title">Email: {pat.email}</p>
                                            <Link className="btn btn-outline-success btn-sm" role="button"
                                            onClick={() => this.setState({
                                                editModalShow: true,
                                                id: pat.id,name: pat.name, lastname: pat.lastname, birthday: pat.birthday, phone: pat.phone, email: pat.email
                                            })}
                                        >Edit
                                        </Link>
                                            <Edit_Pat show={this.state.editModalShow}
                                            onHide={editModalClose}
                                            id={id}
                                            name={name}
                                            lastname={lastname}
                                            birthday={birthday}
                                            email={email} />
                                        <Link className="btn btn-outline-danger btn-sm" role="button"
                                            onClick={() => this.deletePat(pat.id)}
                                        >Delete
                                        </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                </div>
            </section >
        )
    }
}