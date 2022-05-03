import React,{ Component } from 'react';
import { ButtonToolbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { Add_Diet } from './Add_Diet';
import { Edit_Diet } from './Edit_Diet';


export class Diets extends Component {

    constructor(props){
        super(props);
        this.state={diets:[]}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'diets')
        .then(response=>response.json())
        .then(data=>{
            this.setState({diets:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteDep(dietid){
        if(window.confirm('Are you sure?')){
            fetch(process.env.REACT_APP_API+'diets/'+dietid,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }


    render() {
        const { diets, dietid, diettype, startdate, enddate } = this.state;
        let addModalClose = () => this.setState({ addModalShow: false });
        let editModalClose = () => this.setState({ editModalShow: false });
        return (
            <section id="department" class="py-5">
                <div class="container text-center">
                    <h1 class="display-4 pb-1 border-bottom w-50 mx-auto pt-5 mb-5">Diets</h1>
                    <div className="row">
                        {diets.map(diet =>
                            <div className="col-md-6" key={diet.dietid}>
                                <div className="card flex-md-row mb-4 shadow-sm h-md-250">
                                    <div className="card-body d-flex flex-column align-items-start">
                                        <strong className="d-inline-block mb-2 text-primary">Diets</strong>
                                        <h6 className="mb-0">
                                            <a className="text-dark" href="#">Diet Type: {diet.diettype}</a>
                                        </h6>
                                        <div className="mb-1 text-muted small">Start date: {diet.startdate}</div>
                                        <div className="mb-1 text-muted small">End date: {diet.enddate}</div>
                                       
                                        <Link className="btn btn-outline-success btn-sm" role="button"
                                              onClick={() => this.setState({
                                                editModalShow: true,
                                                dietid: diet.dietid, diettype: diet.diettype, startdate: diet.startdate, enddate: diet.enddate
                                            })}
                                        >Edit
                                        </Link>
                                        <Edit_Diet show={this.state.editModalShow}
                                            onHide={editModalClose}
                                            dietid={dietid}
                                            diettype={diettype}
                                            startdate={startdate}
                                            enddate={enddate} />
                                        <Link className="btn btn-outline-danger btn-sm" role="button"
                                            onClick={() => this.deleteDep(diet.dietid)}
                                        >Delete
                                        </Link>
                                    </div>
                                </div>
                            </div>)}
                    </div>
                    <ButtonToolbar>
                        <Link className="btn btn-outline-info btn-block" onClick={() => this.setState({ addModalShow: true })} role="button">Add Diets</Link>
                        <Add_Diet show={this.state.addModalShow}
                            onHide={addModalClose} />
                    </ButtonToolbar>
                </div >
            </section >
        )
    }
}
