import React, { Component } from 'react';
import { ButtonToolbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { Edit_OrariNur } from './Edit_OrariNur';
import { Add_OrariNur } from './Add_OrariNur';




export class OrariNur extends Component {

    constructor(props) {
        super(props);
        this.state = { onurs: [], addModalShow: false, editModalShow: false }
    }

    refreshList() {
        fetch(process.env.REACT_APP_API + 'OrariNur')
            .then(response => response.json())
            .then(data => {
                this.setState({ onurs: data });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    deleteOrariNur(orariId) {
        if (window.confirm('Are you sure?')) {
            fetch(process.env.REACT_APP_API + 'OrariNur/' + orariId, {
                method: 'DELETE',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        }
    }
    render() {
        const { onurs, Nurse, dita, Fillimi, Mbarimi, orariId } = this.state;
        let addModalClose = () => this.setState({ addModalShow: false });
        let editModalClose = () => this.setState({ editModalShow: false });
        return (
            <section id="department" class="py-5">
                <div class="container text-center">
                    <h1 class="display-4 pb-1 border-bottom w-50 mx-auto pt-5 mb-5">Orari i Infermiereve</h1>
                    <div className="row">
                        {onurs.map(onur =>
                            <div className="col-md-6" key={onur.orariId}>
                                <div className="card flex-sm-row mb-4 shadow-sm h-md-250">
                                    <div className="card-body d-flex flex-column align-items-center">
                                        <strong className="d-inline-block mb-2 text-primary">Orari</strong>
                                        <h6 className="mb-0">
                                            Nurse: {onur.Nurse}
                                        </h6>
                                        <div className="mb-1 text-muted small">Days: {onur.dita}</div>
                                        <div className="mb-1 text-muted small">Start: {onur.Fillimi}</div>
                                        <div className="mb-1 text-muted small">End: {onur.Mbarimi}</div>



                                        <Link className="btn btn-outline-success btn-sm" role="button"
                                            onClick={() => this.setState({
                                                editModalShow: true,
                                                orariId: onur.orariId, Nurse: onur.Nurse, dita: onur.dita, Fillimi: onur.Fillimi, Mbarimi: onur.Mbarimi
                                            })}
                                        >Edit
                                        </Link>
                                        <Link className="btn btn-outline-danger btn-sm" role="button"
                                            onClick={() => this.deleteOrariNur(onur.orariId)}>Delete</Link>
                                        <Edit_OrariNur show={this.state.editModalShow}
                                            onHide={editModalClose}

                                            orariID={orariId}
                                            Nurse={Nurse}
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
                         <Add_OrariNur show={this.state.addModalShow}
                            onHide={addModalClose} /> 
                    </ButtonToolbar>

                </div >
            </section >
        )
    }
}