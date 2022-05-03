import React, { Component } from 'react';
import { ButtonToolbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { Add_Amb } from './Add_Amb';
import { Edit_Amb } from './Edit_Amb';

export class Ambullanca extends Component {

    constructor(props) {
        super(props);
        this.state = { ambs: [] }
    }

    refreshList() {
        fetch(process.env.REACT_APP_API + 'Ambullanca')
            .then(response => response.json())
            .then(data => {
                this.setState({ ambs: data });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }
    deleteAmb(AmbullancaId) {
        if (window.confirm('Are you sure?')) {
            fetch(process.env.REACT_APP_API + 'Ambullanca/' + AmbullancaId, {
                method: 'DELETE',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        }
    }

    render() {
        const { ambs, AmbullancaId, Targat, VozitesiName, VozitesiLastname } = this.state;
        let addModalClose = () => this.setState({ addModalShow: false });
        let editModalClose = () => this.setState({ editModalShow: false });

        return (
            <section id="ambullanca" class="py-5 mt-5">
                <div class="row mt-5">
                    {ambs.map(amb =>
                        <div class="col-lg-4" key={amb.AmbullancaId} >
                            <div class="card card-margin">
                                <div class="card-header no-border">
                                    <h5 class="card-title">{amb.AmbullancaId}. Ambullanca</h5>
                                </div>
                                <div class="card-body pt-0">
                                    <div class="widget-49">
                                        <div class="widget-49-title-wrapper">

                                            <div class="widget-49-meeting-info">
                                                <span class="widget-49-meeting-time">Targat: {amb.Targat}</span>
                                                <span class="widget-49-meeting-time">Emri i vozitesit: {amb.VozitesiName}</span>
                                                <span class="widget-49-meeting-time">Mbiemri i vozitesit: {amb.VozitesiLastname}</span>

                                            </div>
                                        </div>
                                        <div class="widget-49-meeting-action">
                                            <Link className="btn btn-outline-success btn-sm" role="button"
                                                onClick={() => this.setState({
                                                    editModalShow: true,
                                                    AmbullancaId: amb.AmbullancaId, Targat: amb.Targat, VozitesiName: amb.VozitesiName, VozitesiLastname: amb.VozitesiLastname
                                                })}
                                            >Edit
                                            </Link>
                                            <Edit_Amb show={this.state.editModalShow}
                                                onHide={editModalClose}
                                                AmbullancaId={AmbullancaId}
                                                Targat={Targat}
                                                VozitesiName={VozitesiName}
                                                VozitesiLastname={VozitesiLastname} />


                                            <Link className="btn btn-outline-danger btn-sm" role="button"
                                                onClick={() => this.deleteAmb(amb.AmbullancaId)}
                                            >Delete
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <ButtonToolbar>
                    <Link className="btn btn-outline-info btn-block" onClick={() => this.setState({ addModalShow: true })} role="button">Add Ambullanca</Link>
                    <Add_Amb show={this.state.addModalShow}
                        onHide={addModalClose} />
                </ButtonToolbar>

            </section >
        )
    }
}