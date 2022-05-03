import React, { Component } from 'react';
import { ButtonToolbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import img from "./img/images.jfif";
import { Add_Dep } from './Add_Dep';
import { Edit_Dep } from './Edit_Dep';



export class Department extends Component {

    constructor(props) {
        super(props);
        this.state = { deps: [], addModalShow: false, editModalShow: false }
    }

    refreshList() {
        fetch(process.env.REACT_APP_API + 'department')
            .then(response => response.json())
            .then(data => {
                this.setState({ deps: data });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    deleteDep(departamentid){
        if(window.confirm('Are you sure?')){
            fetch(process.env.REACT_APP_API+'department/'+departamentid,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }


    render() {
        const { deps, departamentid, departmentname, departmentrooms, departmentdescription } = this.state;
        let addModalClose = () => this.setState({ addModalShow: false });
        let editModalClose = () => this.setState({ editModalShow: false });
        return (
            <section id="department" className="py-5">
                <div className="container text-center">
                    <h1 className="display-4 pb-1 border-bottom w-50 mx-auto pt-5 mb-5">Departments</h1>
                    <div className="row">
                        {deps.map(dep =>
                            <div className="col-md-6" key={dep.departamentid}>
                                <div className="card flex-md-row mb-4 shadow-sm h-md-250">
                                    <div className="card-body d-flex flex-column align-items-start">
                                        <strong className="d-inline-block mb-2 text-primary">Department</strong>
                                        <h6 className="mb-0">
                                            <a className="text-dark" href="#"> {dep.departamentid}. {dep.departmentname}</a>
                                        </h6>
                                        <div className="mb-1 text-muted small">Number of rooms: {dep.departmentrooms}</div>
                                        <p className="card-text mb-auto">{dep.departmentdescription}</p>
                                        <Link className="btn btn-outline-success btn-sm" role="button"
                                            onClick={() => this.setState({
                                                editModalShow: true,
                                                departamentid: dep.departamentid, departmentname: dep.departmentname, departmentrooms: dep.departmentrooms, departmentdescription: dep.departmentdescription
                                            })}
                                        >Edit
                                        </Link>
                                        <Link className="btn btn-outline-danger btn-sm" role="button"
                                            onClick={() => this.deleteDep(dep.departamentid)}
                                        >Delete
                                        </Link>
                                        <Edit_Dep show={this.state.editModalShow}
                                            onHide={editModalClose}
                                            departamentid={departamentid}
                                            departmentname={departmentname}
                                            departmentrooms={departmentrooms}
                                            departmentdescription={departmentdescription} />
                                    </div>
                                    <img className="card-img-right flex-auto d-none d-lg-block" src={img} ></img>
                                </div>
                            </div>)}
                    </div>
                    <ButtonToolbar>
                        <Link className="btn btn-outline-info btn-block" onClick={() => this.setState({ addModalShow: true })} role="button">Add Department</Link>
                        <Add_Dep show={this.state.addModalShow}
                            onHide={addModalClose} />
                    </ButtonToolbar>
                </div >
            </section >
        )
    }
}