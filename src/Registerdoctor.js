import React, { Component } from 'react';


export class Registerdoctor extends Component {

    constructor(props){
        super(props);
        this.state = {regs: [] };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API + 'doctorscardsdata' , {
            method: 'POST',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                DoctorName: event.target.DoctorName.value,
                Department: event.target.Department.value
            })
        })
            .then(res => res.json())
            .then((result) => {
                alert(result);
            },
             (error) => {
                 alert('Failed');
             })
            
    }




    render() {
        return (
            <section id="contact" className="py-5 h-100">
            <div className="container text-center">
                <h1 className="display-4 pb-1 border-bottom w-25 mx-auto pt-5 text-dark">Register</h1>
                <div className="row mx-auto">
                    <div className="col-sm-12 col-md-6 col-lg-6 mx-auto">
                    <form className="p-5  my-3 " method="put" onSubmit={this.handleSubmit}>
                                    <div className="form-group text-left" controlid='DoctorName'>
                                        <input type="text" name="DoctorName" className="form-control" required defaultValue={this.props.DoctorName} placeholder="DoctorName" ></input>
                                    </div>
                                    <div className="form-group text-left" controlid='Department'>
                                        <input type="text" name="Department" className="form-control" required defaultValue={this.props.Department} placeholder="Department"></input>
                                    </div>
                                    <button type="submit" className="btn btn-block btn-outline-secondary mt-2" name="edit">Register</button>
                                </form>
                    </div>
                </div>
            </div>
        </section>

        )
    }
}