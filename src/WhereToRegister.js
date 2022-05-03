import React, { Component } from 'react';
import { Link } from "react-router-dom";
import patient from "./img/patient.png";
import nurse from "./img/nurse.png";
import doctor from "./img/doctor.png";

export class WhereToRegister extends Component {

    render() {
        return (
            <section id="department" className="py-5 mt-5">
                <div className="row mt-5">
                    <div className="col-md-4">
                        <div className="card mb-4 border-dark">
                            <img className="card-img-top" src={patient} alt="Card image cap"></img>
                            <div className="card-body">
                                <h5 className="card-title">Patients</h5>
                                <p className="card-text">If you want to register to patients</p>
                                <Link className="btn btn-outline-info btn-block" to="/register">Register</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-4 border-dark">
                            <img className="card-img-top" src={nurse} alt="Card image cap"></img>
                            <div className="card-body">
                                <h5 className="card-title">Nurses</h5>
                                <p className="card-text">If you want to register to nurses</p>
                                <Link className="btn btn-outline-info btn-block" to="/registernurse" >Register</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-4 border-dark">
                            <img className="card-img-top" src={doctor} alt="Card image cap"></img>
                            <div className="card-body">
                                <h5 className="card-title">Doctors</h5>
                                <p className="card-text">If you want to register to doctors</p>
                                <Link className="btn btn-outline-info btn-block" to="/registerdoctor">Register</Link>
                            </div>
                        </div>
                    </div>
                </div>

            </section >

        )
    }
}
