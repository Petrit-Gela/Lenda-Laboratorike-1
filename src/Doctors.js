import React,{ Component } from 'react';
import { ButtonToolbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import img from "./img//doc1.jpg";
import {Edit_Doc} from "./Edit_Doc";


export class Doctors extends Component {

    constructor(props){
        super(props);
        this.state={docs:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'doctorscardsdata')
        .then(response=>response.json())
        .then(data=>{
            this.setState({docs:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteDoc(DoctorId){
        if(window.confirm('Are you sure?')){
            fetch(process.env.REACT_APP_API+'doctorscardsdata/'+DoctorId,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }

    render() {
        const { docs,DoctorName,Department,DoctorId } = this.state;
        let addModalClose = () => this.setState({ addModalShow: false });
        let editModalClose = () => this.setState({ editModalShow: false });
        return (
            <section id="department" className="py-5">
                <div className="container text-center">
                    <h1 className="display-4 pb-1 border-bottom w-50 mx-auto pt-5 mb-5">Doctors</h1>
                    <div className="row">
                        {docs.map(doc =>
                            <div className="col-md-6" key={doc.DoctorID}>
                                <div className="card flex-md-row mb-4 shadow-sm h-md-250">
                                    <div className="card-body d-flex flex-column align-items-start">
                                        <strong className="d-inline-block mb-2 text-primary">Doctor</strong>
                                        <h6 className="mb-0">
                                            <a className="text-dark" href="#">Name: {doc.DoctorName}</a>
                                        </h6>
                                        <div className="mb-1 text-muted small">Department: {doc.Department}</div>
                                       
                                        <Link className="btn btn-outline-success btn-sm" role="button"
                                            onClick={() => this.setState({
                                                editModalShow: true,
                                                DoctorId: doc.DoctorId, docname: doc.DoctorName, docdepartment: doc.Department
                                            })}
                                        >Edit
                                        </Link>
                                        <Link className="btn btn-outline-danger btn-sm" role="button"
                                        onClick={() => this.deleteDoc(doc.DoctorId)}>Delete</Link>
                                        <Edit_Doc show={this.state.editModalShow}
                                            onHide={editModalClose}
                                            DoctorId={DoctorId}
                                            DoctorName={DoctorName}
                                            Department={Department}
                                            />
                                    </div>
                                    <img className="card-img-right flex-auto d-none d-lg-block" src={img} ></img>
                                </div>
                            </div>)}
                    </div>
                   
                </div >
            </section >
        )
    }
}
