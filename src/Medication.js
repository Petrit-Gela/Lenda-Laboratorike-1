import React, { Component } from 'react';
import { ButtonToolbar } from 'react-bootstrap';
import { Link } from "react-router-dom";

import { Add_Meds } from './Add_Meds';
import { Edit_Meds } from './Edit_Meds';


export class Medication extends Component {

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

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    deleteDep(medikamentiid){
        if(window.confirm('Are you sure?')){
            fetch(process.env.REACT_APP_API+'Medikamentet/'+medikamentiid,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }


    render() {
        const { meds, medikamentiid, emri, doktoriname, doktorilastname, cmimi } = this.state;
        let addModalClose = () => this.setState({ addModalShow: false });
        let editModalClose = () => this.setState({ editModalShow: false });
        return (
            <section id="department" class="py-5">
                <div class="container text-center">
                    <h1 class="display-4 pb-1 border-bottom w-50 mx-auto pt-5 mb-5">Medications</h1>
                    <div className="row">
                        {meds.map(med =>
                            <div className="col-md-6" key={med.medikamentiid}>
                                <div className="card flex-md-row mb-4 shadow-sm h-md-250">
                                    <div className="card-body d-flex flex-column align-items-start">
                                        <strong className="d-inline-block mb-2 text-primary">Medications</strong>
                                        <h6 className="mb-0">
                                            <a className="text-dark" href="#">{med.emri}</a>
                                        </h6>
                                        <p className="card-text mb-auto">Doctor's name: {med.doktoriname}</p>
                                        <p className="card-text mb-auto">Doctor's lastname: {med.doktorilastname}</p>
                                        <p className="card-text mb-auto">Price: {med.cmimi}€</p>
                                        <Link className="btn btn-outline-success btn-sm" role="button"
                                            onClick={() => this.setState({
                                                editModalShow: true,
                                                medikamentiid: med.medikamentiid, emri: med.emri, doktoriname: med.doktoriname, doktorilastname: med.doktorilastname, cmimi: med.cmimi
                                            })}
                                        >Edit
                                        </Link>
                                        <Link className="btn btn-outline-danger btn-sm" role="button"
                                            onClick={() => this.deleteDep(med.medikamentiid)}
                                        >Delete
                                        </Link>
                                        <Edit_Meds show={this.state.editModalShow}
                                            onHide={editModalClose}
                                            medikamentiid={medikamentiid}
                                            emri={emri}
                                            doktoriname={doktoriname}
                                            doktorilastname={doktorilastname}
                                            cmimi={cmimi} />
                                    </div>
                                </div>
                            </div>)}
                    </div>
                    <ButtonToolbar>
                        <Link className="btn btn-outline-info btn-block" onClick={() => this.setState({ addModalShow: true })} role="button">Add Medication</Link>
                        <Add_Meds show={this.state.addModalShow}
                            onHide={addModalClose} />
                    </ButtonToolbar>
                </div >
            </section >
        )
    }
}