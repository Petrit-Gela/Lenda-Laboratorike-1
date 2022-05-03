import React, { Component } from 'react';
import { ButtonToolbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import img from "./img/images.jfif";
import { Add_Room } from './Add_Room';
import { Edit_Room } from './Edit_Room';



export class Room extends Component {

    constructor(props) {
        super(props);
        this.state = { rooms: [], addModalShow: false, editModalShow: false }
    }

    refreshList() {
        fetch(process.env.REACT_APP_API + 'room')
            .then(response => response.json())
            .then(data => {
                this.setState({ rooms: data });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    deleteDep(dhomaid){
        if(window.confirm('Are you sure?')){
            fetch(process.env.REACT_APP_API+'room/'+dhomaid,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }


    render() {
        const { rooms, dhomaid, nrdhomes, kapaciteti, departamenti } = this.state;
        let addModalClose = () => this.setState({ addModalShow: false });
        let editModalClose = () => this.setState({ editModalShow: false });
        return (
            <section id="room" className="py-5">
                <div className="container text-center">
                    <h1 className="display-4 pb-1 border-bottom w-50 mx-auto pt-5 mb-5">Rooms</h1>
                    <div className="row">
                        {rooms.map(room =>
                            <div className="col-md-6" key={room.dhomaid}>
                                <div className="card flex-md-row mb-4 shadow-sm h-md-250">
                                    <div className="card-body d-flex flex-column align-items-start">
                                        <strong className="d-inline-block mb-2 text-primary">Department</strong>
                                        <h6 className="mb-0">
                                            <a className="text-dark" href="#"> {room.dhomaid}. {room.departamenti}</a>
                                        </h6>
                                        <div className="mb-1 text-muted small">Number of beds: {room.kapaciteti}</div>
                                        <p className="card-text mb-auto">Number of room: {room.nrdhomes}</p>
                                        <Link className="btn btn-outline-success btn-sm" role="button"
                                            onClick={() => this.setState({
                                                editModalShow: true,
                                                dhomaid: room.dhomaid, nrdhomes: room.nrdhomes, kapaciteti: room.kapaciteti, departamenti: room.departamenti
                                            })}
                                        >Edit
                                        </Link>
                                        <Link className="btn btn-outline-danger btn-sm" role="button"
                                            onClick={() => this.deleteDep(room.dhomaid)}
                                        >Delete
                                        </Link>
                                        <Edit_Room show={this.state.editModalShow}
                                            onHide={editModalClose}
                                            dhomaid={dhomaid}
                                            nrdhomes={nrdhomes}
                                            kapaciteti={kapaciteti}
                                            departamenti={departamenti} />
                                    </div>
                                </div>
                            </div>)}
                    </div>
                    <ButtonToolbar>
                        <Link className="btn btn-outline-info btn-block" onClick={() => this.setState({ addModalShow: true })} role="button">Add Room</Link>
                        <Add_Room show={this.state.addModalShow}
                            onHide={addModalClose} />
                    </ButtonToolbar>
                </div >
            </section >
        )
    }
}