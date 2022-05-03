import React, { Component } from 'react';
import patient from "./img/patient.png";
import { ButtonToolbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { Add_Dia } from './Add_Dia';
import { Edit_Dia } from './Edit_Dia';


export class Diagnose extends Component {

    constructor(props) {
        super(props);
        this.state = { dias: [], addModalShow: false, editModalShow: false }
    }

    refreshList() {
        fetch(process.env.REACT_APP_API + 'Diagnoses')
            .then(response => response.json())
            .then(data => {
                this.setState({ dias: data });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    deleteDia(diagnoseid){
        if(window.confirm('Are you sure?')){
            fetch(process.env.REACT_APP_API+'Diagnoses/'+diagnoseid,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }


    // const App = () => {
    //     const [currentLayout, setCurrentLayout] = React.useState("k-card-list");
      
    //     const handleOnChange = (e) => {
    //       setCurrentLayout(e.value);
    //     };




    render() {
        const { dias, diagnoseid, patientsname, diagnosename, diagnosedescription, nursesname, doctorsname } = this.state;
        let addModalClose = () => this.setState({ addModalShow: false });
        let editModalClose = () => this.setState({ editModalShow: false });

      
        return (
            <section id="diagnoses" class="py-5 mt-5">
                <div class="row mt-5">
                {dias.map(dia =>
                    <div class="col-lg-4" key={dia.diagnoseid} >
                    <div class="card card-margin">
                        <div class="card-header no-border">
                            <h5 class="card-title">{dia.diagnoseid}. Diagnoza</h5>
                        </div>
                        <div class="card-body pt-0">
                            <div class="widget-49">
                                <div class="widget-49-title-wrapper">
                                    
                                    <div class="widget-49-meeting-info">
                                        <span class="widget-49-meeting-time">Diagnose Id: {dia.diagnoseid}</span>
                                        <span class="widget-49-meeting-time">Emri i Pacientit: {dia.patientsname}</span>
                                        <span class="widget-49-meeting-time">Emri i Diagnozes: {dia.diagnosename}</span>
                                        <span class="widget-49-meeting-time">Pershkrimi: {dia.diagnosedescription}</span>
                                        <span class="widget-49-meeting-time">Emri i Infermieres: {dia.nursesname}</span>
                                        <span class="widget-49-meeting-time">Emri i Doktorit: {dia.doctorsname}</span>
                                    </div>
                                </div>
 
                                    <div class="widget-49-meeting-action">
                                            <Link className="btn btn-outline-success btn-sm" role="button"
                                            onClick={() => this.setState({
                                                editModalShow: true,
                                                diagnoseid: dia.diagnoseid, patientsname: dia.patientsname, diagnosename: dia.diagnosename, diagnosedescription: dia.diagnosedescription, nursesname: dia.nursesname, doctorsname: dia.doctorsname
                                            })}
                                        >Edit
                                        </Link>
                                        
                                        <Edit_Dia show={this.state.editModalShow}
                                            onHide={editModalClose}
                                            diagnoseid={diagnoseid}
                                            patientsname={patientsname}
                                            diagnosename={diagnosename}
                                            diagnosedescription={diagnosedescription}
                                            nursesname={nursesname} 
                                            doctorsname={doctorsname} />

                                            <Link className="btn btn-outline-danger btn-sm" role="button"
                                            onClick={() => this.deleteDia(dia.diagnoseid)}
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
                        <Link className="btn btn-outline-info btn-block" onClick={() => this.setState({ addModalShow: true })} role="button">Add Diagnose</Link>
                        <Add_Dia show={this.state.addModalShow}
                            onHide={addModalClose} />
                    </ButtonToolbar> 
            </section >
        )
    }
}
                                
                
             