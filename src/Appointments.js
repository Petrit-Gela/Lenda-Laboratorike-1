import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Edit_App } from './Edit_App';


export class Appointments extends Component {

    constructor(props) {
        super(props);
        this.state = { apps: [] };
    }

    refreshList() {
        fetch(process.env.REACT_APP_API + 'Appointment')
            .then(response => response.json())
            .then(data => {
                this.setState({ apps: data });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }
    deleteApp(appointmentid){
        if(window.confirm('Are you sure?')){
            fetch(process.env.REACT_APP_API+'Appointment/'+appointmentid,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }

    render() {
        const { apps, appointmentid, appointmentdate, username, uselastname, userphone, useremail, departmentid, doctorid } = this.state;
        let editModalClose = () => this.setState({ editModalShow: false });
        return (
            <section id="appointments" class="py-5 mt-5" >
                <div class="row mt-5">
                    {apps.map(app =>
                        <div class="col-lg-4" key={app.appointmentid} >
                            <div class="card card-margin">
                                <div class="card-header no-border">
                                    <h5 class="card-title">{app.appointmentid}. Appointment</h5>
                                </div>
                                <div class="card-body pt-0">
                                    <div class="widget-49">
                                        <div class="widget-49-title-wrapper">
                                            <div class="widget-49-date-primary">
                                                <span class="widget-49-date-day">{app.appointmentdate}</span>
                                            </div>
                                            <div class="widget-49-meeting-info">
                                                <span class="widget-49-meeting-time">Name: {app.username}</span>
                                                <span class="widget-49-meeting-time">Lastname: {app.uselastname}</span>
                                                <span class="widget-49-meeting-time">Phone: {app.userphone}</span>
                                                <span class="widget-49-meeting-time">Email: {app.useremail}</span>
                                                <span class="widget-49-meeting-time">Department: {app.departmentid}</span>
                                                <span class="widget-49-meeting-time">Doctor: {app.doctorid}</span>
                                            </div>
                                        </div>
                                        <div class="widget-49-meeting-action">
                                            <Link className="btn btn-outline-info"
                                                onClick={() => this.setState({
                                                    editModalShow: true,
                                                    appointmentid: app.appointmentid, appointmentdate: app.appointmentdate, username: app.username, uselastname: app.uselastname, userphone: app.userphone, useremail: app.useremail, departmentid: app.departmentid,doctorid: app.doctorid
                                                })}
                                            >Edit</Link>
                                            <Edit_App show={this.state.editModalShow}
                                                onHide={editModalClose}
                                                appointmentid={appointmentid}
                                                appointmentdate={appointmentdate}
                                                username={username}
                                                uselastname={uselastname}
                                                userphone={userphone}
                                                useremail={useremail}
                                                departmentid={departmentid}
                                                doctorid={doctorid} />
                                                
                                            <Link className="btn btn-outline-danger"
                                            onClick={() => this.deleteApp(app.appointmentid)}
                                            >Delete</Link>
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