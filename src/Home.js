import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Department1 from "./img/departments-1.jpg";
import Department2 from "./img/departments-2.jpg";
import Department3 from "./img/departments-3.jpg";
import Department4 from "./img/departments-4.jpg";
import Department5 from "./img/departments-5.jpg";
import AboutImg from "./img/departments-2.jpg";

export class Home extends Component {

    constructor(props){
        super(props);
        this.state = {app: [] };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API + 'Appointment' , {
            method: 'POST',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                username: event.target.username.value,
                uselastname: event.target.uselastname.value,
                useremail: event.target.useremail.value,
                userphone: event.target.userphone.value,
                appointmentdate: event.target.appointmentdate.value,
                departmentid: event.target.departmentid.value,
                doctorid: event.target.doctorid.value,
                textmessage: event.target.textmessage.value
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
            <section id="departments" className="departments">
                <section id="hero" className="d-flex align-items-center">
                    <div className="container">
                        <h1>Welcome to our Hospital and Healthcare System</h1>
                    </div>
                </section>
                <div className="container py-5 text-center">
                    <div className="section-title">
                        <h2>About us</h2>
                    </div>
                    <div className="row pt-5">
                        <div className="col-sm-12 col-md-6">
                            <p className="lead text-justify">We tried to build an application that helps managing hospital systems
                            better. With our application doctors and nurses will be able to take care of patients at least in a little
                            easier way. Also our application helps the patients mkae appointments faster and more efficiently.
                            </p>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <img src={AboutImg} alt="" className="img-fluid"></img>
                        </div>
                    </div>
                </div>
                <div className="container">

                    <div className="section-title">
                        <h2>Departments</h2>
                        <p>Down bleow we have listet some of the departments available in our system also u can view the specifics
                        about each department.
                        </p>
                    </div>

                    <div className="row">
                        <div className="col-lg-3">
                            <ul className="nav nav-tabs flex-column">
                                <li className="nav-item">
                                    <a className="nav-link active show" data-bs-toggle="tab" href="#tab-1">Cardiology</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-bs-toggle="tab" href="#tab-2">Neurology</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-bs-toggle="tab" href="#tab-3">Hepatology</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-bs-toggle="tab" href="#tab-4">Pediatrics</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-bs-toggle="tab" href="#tab-5">Eye Care</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-9 mt-4 mt-lg-0">
                            <div className="tab-content">
                                <div className="tab-pane active show" id="tab-1">
                                    <div className="row">
                                        <div className="col-lg-8 details order-2 order-lg-1">
                                            <h3>Cardiology</h3>
                                            <p className="fst-italic">Cardiology is a branch of medicine that deals with the disorders of the heart as well as some parts of the circulatory system.</p>
                                            <p>The field includes medical diagnosis and treatment of congenital heart defects, coronary artery disease, heart failure, valvular heart disease and electrophysiology.</p>
                                        </div>
                                        <div className="col-lg-4 text-center order-1 order-lg-2">
                                            <img src={Department1} alt="" className="img-fluid"></img>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="tab-2">
                                    <div className="row">
                                        <div className="col-lg-8 details order-2 order-lg-1">
                                            <h3>Et blanditiis nemo veritatis excepturi</h3>
                                            <p className="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer
                              a videna mareta paulona marka</p>
                                            <p>Ea ipsum voluptatem consequatur quis est. Illum error ullam omnis quia et reiciendis sunt sunt
                                            est. Non aliquid repellendus itaque accusamus eius et velit ipsa voluptates. Optio nesciunt eaque
                              beatae accusamus lerode pakto madirna desera vafle de nideran pal</p>
                                        </div>
                                        <div className="col-lg-4 text-center order-1 order-lg-2">
                                            <img src={Department2} alt="" className="img-fluid"></img>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="tab-3">
                                    <div className="row">
                                        <div className="col-lg-8 details order-2 order-lg-1">
                                            <h3>Impedit facilis occaecati odio neque aperiam sit</h3>
                                            <p className="fst-italic">Eos voluptatibus quo. Odio similique illum id quidem non enim fuga. Qui natus
                              non sunt dicta dolor et. In asperiores velit quaerat perferendis aut</p>
                                            <p>Iure officiis odit rerum. Harum sequi eum illum corrupti culpa veritatis quisquam. Neque
                                            necessitatibus illo rerum eum ut. Commodi ipsam minima molestiae sed laboriosam a iste odio. Earum
                              odit nesciunt fugiat sit ullam. Soluta et harum voluptatem optio quae</p>
                                        </div>
                                        <div className="col-lg-4 text-center order-1 order-lg-2">
                                            <img src={Department3} alt="" className="img-fluid"></img>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="tab-4">
                                    <div className="row">
                                        <div className="col-lg-8 details order-2 order-lg-1">
                                            <h3>Fuga dolores inventore laboriosam ut est accusamus laboriosam dolore</h3>
                                            <p className="fst-italic">Totam aperiam accusamus. Repellat consequuntur iure voluptas iure porro quis
                              delectus</p>
                                            <p>Eaque consequuntur consequuntur libero expedita in voluptas. Nostrum ipsam necessitatibus aliquam
                                            fugiat debitis quis velit. Eum ex maxime error in consequatur corporis atque. Eligendi asperiores
                              sed qui veritatis aperiam quia a laborum inventore</p>
                                        </div>
                                        <div className="col-lg-4 text-center order-1 order-lg-2">
                                            <img src={Department4} alt="" className="img-fluid"></img>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="tab-5">
                                    <div className="row">
                                        <div className="col-lg-8 details order-2 order-lg-1">
                                            <h3>Est eveniet ipsam sindera pad rone matrelat sando reda</h3>
                                            <p className="fst-italic">Omnis blanditiis saepe eos autem qui sunt debitis porro quia.</p>
                                            <p>Exercitationem nostrum omnis. Ut reiciendis repudiandae minus. Omnis recusandae ut non quam ut
                                            quod eius qui. Ipsum quia odit vero atque qui quibusdam amet. Occaecati sed est sint aut vitae
                              molestiae voluptate vel</p>
                                        </div>
                                        <div className="col-lg-4 text-center order-1 order-lg-2">
                                            <img src={Department5} alt="" className="img-fluid"></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <section id="appointment" className="appointment section-bg">
                    <div className="container">

                        <div className="section-title">
                            <h2>Make an Appointment</h2>
                            <p>This is our form to make appointments you can choose the department in which you need the visit 
                                and then choose the doctor, whom you would like to be checked by.
                            </p>
                        </div>

                        <form action="forms/appointment.php" method="post" onSubmit={this.handleSubmit} role="form" className="php-email-form">
                            <div className="row">
                                <div className="col-md-4 form-group">
                                    <input type="text" name="username" className="form-control" id="username" required defaultValue={this.props.username} placeholder="Your Name" data-rule="minlen:4"
                                        data-msg="Please enter at least 4 chars"></input>
                                    <div className="validate"></div>
                                </div>
                                <div className="col-md-4 form-group mt-3 mt-md-0">
                                    <input type="text" className="form-control" name="uselastname" id="uselastname" required defaultValue={this.props.uselastname} placeholder="Your Lastname"></input>
                                    <div className="validate"></div>
                                </div>
                                <div className="col-md-4 form-group mt-3 mt-md-0">
                                    <input type="tel" className="form-control" name="useremail" id="useremail" required defaultValue={this.props.useremail} placeholder="Your Email"
                                        data-rule="minlen:4" data-msg="Please enter at least 4 chars"></input>
                                    <div className="validate"></div>
                                </div>
                                <div className="col-md-4 form-group mt-3 mt-md-0">
                                    <input type="tel" className="form-control" name="userphone" id="userphone" required defaultValue={this.props.userphone} placeholder="Your Phone"
                                        data-rule="minlen:4" data-msg="Please enter at least 4 chars"></input>
                                    <div className="validate"></div>
                                </div>
                                <div className="col-md-4 form-group mt-3 mt-md-0">
                                    <input type="date" name="appointmentdate" className="form-control datepicker" id="appointmentdate" required defaultValue={this.props.appointmentdate}
                                        placeholder="Appointment Date" data-rule="minlen:4" data-msg="Please enter at least 4 chars"></input>
                                    <div className="validate"></div>
                                </div>
                                <div className="col-md-4 form-group mt-3 mt-md-0">
                                    <input type="text" className="form-control" name="departmentid" id="departmentid" required defaultValue={this.props.departmentid} placeholder="Department"></input>
                                    <div className="validate"></div>
                                </div>
                                <div className="col-md-4 form-group">
                                    <input type="text" name="doctorid" className="form-control" id="doctorid" required defaultValue={this.props.doctorid} placeholder="Doctor's Name and Lastname" data-rule="minlen:4"
                                        data-msg="Please enter at least 4 chars"></input>
                                    <div className="validate"></div>
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <textarea className="form-control" name="textmessage" rows="5" required defaultValue={this.props.textmessage} placeholder="Message (Optional)"></textarea>
                                <div className="validate"></div>
                            </div>
                            <div className="text-center"><button type="submit">Make an Appointment</button></div>
                        </form>
                        <p>Check appointments <Link to="/appointments" >here</Link> </p>
                    </div>
                </section>
            </section>
        )
    }
}