import React, { Component } from 'react';
import { ButtonToolbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { Edit_Lab } from './Edit_Lab';
import { Add_Lab } from './Add_Lab';




export class Laboratori extends Component {

    constructor(props) {
        super(props);
        this.state = { labs: [], addModalShow: false, editModalShow: false }
    }

    refreshList() {
        fetch(process.env.REACT_APP_API + 'laboratori')
            .then(response => response.json())
            .then(data => {
                this.setState({ labs: data });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    deleteLab(laboratoriId) {
        if (window.confirm('Are you sure?')) {
            fetch(process.env.REACT_APP_API + 'laboratori/' + laboratoriId, {
                method: 'DELETE',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        }
    }
    render() {
        const { labs, laboratoriId, llojianalizes, cmimianalizes } = this.state;
        let addModalClose = () => this.setState({ addModalShow: false });
        let editModalClose = () => this.setState({ editModalShow: false });
        return (
            <section id="department" class="py-5">
                <div class="container text-center">
                    <h1 class="display-4 pb-1 border-bottom w-50 mx-auto pt-5 mb-5">Laboratori </h1>
                    <div className="row">
                        {labs.map(lab =>
                            <div className="col-md-6" key={lab.laboratoriId}>
                                <div className="card flex-sm-row mb-4 shadow-sm h-md-250">
                                    <div className="card-body d-flex flex-column align-items-center">
                                        <strong className="d-inline-block mb-2 text-primary">Laboratori</strong>
                                        <div className="mb-1 text-muted small">Lloji i Analizes: {lab.llojianalizes}</div>
                                        <div className="mb-1 text-muted small">Cmimi i Analizes: {lab.cmimianalizes}€</div>

                                        <Link className="btn btn-outline-success btn-sm" role="button"
                                            onClick={() => this.setState({
                                                editModalShow: true,
                                                laboratoriId: lab.laboratoriId,llojianalizes: lab.llojianalizes, cmimianalizes: lab.cmimianalizes
                                            })}
                                        >Edit
                                        </Link>
                                        <Link className="btn btn-outline-danger btn-sm" role="button"
                                            onClick={() => this.deleteLab(lab.laboratoriId)}>Delete</Link>
                                        <Edit_Lab show={this.state.editModalShow}
                                            onHide={editModalClose}

                                            laboratoriId={laboratoriId}
                                            llojianalizes={llojianalizes}
                                            cmimianalizes={cmimianalizes}
                                        />
                                    </div>

                                </div>


                            </div>)}
                    </div>
                    <ButtonToolbar>
                        <Link className="btn btn-outline-info btn-block" onClick={() => this.setState({ addModalShow: true })} role="button">Add Laborator</Link>
                         <Add_Lab show={this.state.addModalShow}
                            onHide={addModalClose} /> 
                    </ButtonToolbar>

                </div >
            </section >
        )
    }
}
