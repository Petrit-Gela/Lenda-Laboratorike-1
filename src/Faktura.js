import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { ButtonToolbar } from 'react-bootstrap';
import { Add_Faktura } from './Add_Faktura';
import { Edit_Fakt } from './Edit_Fakt';


export class Faktura extends Component {

    constructor(props) {
        super(props);
        this.state = { fakt: [], addModalShow: false, editModalShow: false}
    }

    refreshList() {
        fetch(process.env.REACT_APP_API + 'Fatura')
            .then(response => response.json())
            .then(data => {
                this.setState({ fakt: data });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    deleteDep(faturaid){
        if(window.confirm('Are you sure?')){
            fetch(process.env.REACT_APP_API+'Fatura/'+faturaid,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }


    render() {
        const { fakt, faturaid, vizita, totali, pacientiname, pacientilastname } = this.state;
        let editModalClose = () => this.setState({ editModalShow: false });
        let addModalClose = () => this.setState({ addModalShow: false });
        return (
            <section id="faktura" className="py-5 mt-5">
                <div className="row ml-5">
                {fakt.map(fac =>
                    <div className="col-md-4 col-sm-6 content-card" key={fac.id}>
                        <div className="card-big-shadow">
                            <div className="card card-just-text" data-background="color" data-color="blue" data-radius="none">
                                <div className="content">
                                    <h6 className="category">{fac.faturaid}. Faktura</h6>
                                    <h4 className="title"><a href="#">Lloji i vizites:{fac.vizita}</a></h4>
                                    <p className="description">Emri i pacientit: {fac.pacientiname} Mbiemri i pacientit:{fac.pacientilastname} </p>
                                    <p className="description">Cmimi: {fac.totali}€</p>
                                    <Link className="btn btn-outline-success btn-sm" role="button"
                                            onClick={() => this.setState({
                                                editModalShow: true,
                                                faturaid: fac.faturaid, vizita: fac.vizita, totali: fac.totali, pacientiname: fac.pacientiname, pacientilastname: fac.pacientilastname
                                            })}
                                        >Edit
                                        </Link>
                                        <Link className="btn btn-outline-danger btn-sm" role="button"
                                            onClick={() => this.deleteDep(fac.faturaid)}
                                        >Delete
                                        </Link>
                                        <Edit_Fakt show={this.state.editModalShow}
                                            onHide={editModalClose}
                                            faturaid={faturaid}
                                            vizita={vizita}
                                            totali={totali}
                                            pacientiname={pacientiname}
                                            pacientilastname={pacientilastname} />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                </div>
                <ButtonToolbar>
                        <Link className="btn btn-outline-info btn-block" onClick={() => this.setState({ addModalShow: true })} role="button">Add Faktura</Link>
                        <Add_Faktura show={this.state.addModalShow}
                            onHide={addModalClose} />
                    </ButtonToolbar>
            </section >
        )
    }
}