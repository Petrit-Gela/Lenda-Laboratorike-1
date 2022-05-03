import React, { Component } from 'react';
import { ButtonToolbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { Edit_Orari } from './Edit_Orari';
import { Add_Orari } from './Add_Orari';




export class Orari extends Component {

    constructor(props) {
        super(props);
        this.state = { orar: [], addModalShow: false, editModalShow: false }
    }

    refreshList() {
        fetch(process.env.REACT_APP_API + 'orari')
            .then(response => response.json())
            .then(data => {
                this.setState({ orar: data });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    deleteOrari(orariId) {
        if (window.confirm('Are you sure?')) {
            fetch(process.env.REACT_APP_API + 'orari/' + orariId, {
                method: 'DELETE',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        }
    }
    render() {
        const { orar, Doktori, dita, Fillimi, Mbarimi, orariId } = this.state;
        let addModalClose = () => this.setState({ addModalShow: false });
        let editModalClose = () => this.setState({ editModalShow: false });
        return (
            <section id="department" class="py-5">
                <div class="container text-center">
                    <h1 class="display-4 pb-1 border-bottom w-50 mx-auto pt-5 mb-5">Orari i Doktoreve</h1>
                    <div className="row">
                        {orar.map(ora =>
                            <div className="col-md-6" key={ora.orariId}>
                                <div className="card flex-sm-row mb-4 shadow-sm h-md-250">
                                    <div className="card-body d-flex flex-column align-items-center">
                                        <strong className="d-inline-block mb-2 text-primary">Orari</strong>
                                        <h6 className="mb-0">
                                            Doctor: {ora.Doktori}
                                        </h6>
                                        <div className="mb-1 text-muted small">Days: {ora.dita}</div>
                                        <div className="mb-1 text-muted small">Start: {ora.Fillimi}</div>
                                        <div className="mb-1 text-muted small">End: {ora.Mbarimi}</div>



                                        <Link className="btn btn-outline-success btn-sm" role="button"
                                            onClick={() => this.setState({
                                                editModalShow: true,
                                                orariId: ora.orariId, Doktori: ora.Doktori, dita: ora.dita, Fillimi: ora.Fillimi, Mbarimi: ora.Mbarimi
                                            })}
                                        >Edit
                                        </Link>
                                        <Link className="btn btn-outline-danger btn-sm" role="button"
                                            onClick={() => this.deleteOrari(ora.orariId)}>Delete</Link>
                                        <Edit_Orari show={this.state.editModalShow}
                                            onHide={editModalClose}

                                            orariID={orariId}
                                            Doktori={Doktori}
                                            dita={dita}
                                            Fillimi={Fillimi}

                                            Mbarimi={Mbarimi}

                                        />
                                    </div>

                                </div>


                            </div>)}
                    </div>
                    <ButtonToolbar>
                        <Link className="btn btn-outline-info btn-block" onClick={() => this.setState({ addModalShow: true })} role="button">Add Schedule</Link>
                         <Add_Orari show={this.state.addModalShow}
                            onHide={addModalClose} /> 
                    </ButtonToolbar>

                </div >
            </section >
        )
    }
}
