import React, { Component } from 'react';
import { ButtonToolbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { Edit_DietFood } from './Edit_DietFood';
import { Add_DietFood } from './Add_DietFood';
import img from "./img//healthy.jpg";

export class DietFood extends Component {

    constructor(props) {
        super(props);
        this.state = { difoods: [] }
        this.handleFileSelected = this.handleFileSelected.bind(this);
    }

    photofilename = "healthy.png";
    imagesrc = process.env.REACT_APP_PHOTOPATH + this.photofilename;


    refreshList() {
        fetch(process.env.REACT_APP_API + 'DietFood')
            .then(response => response.json())
            .then(data => {
                this.setState({ difoods: data });
            });
    }

    componentDidMount() {
        this.refreshList();
    }
    componentDidUpdate() {
        this.refreshList();
    }

    handleFileSelected(event) {
        event.preventDefault();
        this.photofilename = event.target.files[0].name;
        const formData = new FormData();
        formData.append(
            "myFile",
            event.target.files[0],
            event.target.files[0].name
        );

        fetch(process.env.REACT_APP_API + 'DietFood/SaveFile', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then((result) => {
                this.imagesrc = process.env.REACT_APP_PHOTOPATH + result;
            },
                (error) => {
                    alert('Failed');
                })

    }

    deleteDep(dietFoodid) {
        if (window.confirm('Are you sure?')) {
            fetch(process.env.REACT_APP_API + 'DietFood/' + dietFoodid, {
                method: 'DELETE',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        }
    }






    render() {
        const { difoods, dietFoodid, dietName, allowedFoods, notallowedFoods, proteins } = this.state;
        let addModalClose = () => this.setState({ addModalShow: false });
        let editModalClose = () => this.setState({ editModalShow: false });

        return (
            <section id="department" class="py-5 mt-5">
                <div class="row mt-5">
                    {difoods.map(difood =>
                        <div class="col-xs-12 col-sm-6 col-md-4" key={difood.dietFoodid}>
                            <div class="image-flip">
                                <div class="mainflip flip-0">
                                    <div class="frontside">
                                        <div class="card">

                                            <div class="card-body text-center">
                                                <img className="card-img-right flex-auto d-none d-lg-block" src={img} ></img>
                                                <h4 class="card-title"> {difood.dietName}</h4>

                                            </div>
                                        </div>
                                    </div>


                                    <div class="backside">
                                        <div class="card">
                                            <div class="card-body text-center mt-4">
                                                <h4 class="card-title">The benefits of Diet</h4>
                                                <Link className="btn btn-outline-success btn-sm" role="button"
                                                    onClick={() => this.setState({
                                                        editModalShow: true,
                                                        dietFoodid: difood.dietFoodid, dietName: difood.dietName, allowedFoods: difood.allowedFoods,
                                                        notallowedFoods: difood.notallowedFoods, proteins: difood.proteins

                                                    })}

                                                >Edit</Link>
                                                                                        <Link className="btn btn-outline-danger btn-sm" role="button"
                                            onClick={() => this.deleteDep(difood.dietFoodid)}
                                        >Delete
                                        </Link>

                                                <Edit_DietFood show={this.state.editModalShow}
                                                    onHide={editModalClose}
                                                    dietFoodid={dietFoodid}
                                                    dietName={dietName}
                                                    allowedFoods={allowedFoods}
                                                    notallowedFoods={notallowedFoods}
                                                    proteins={proteins}

                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>                       


                    )}
                </div>
                                            <ButtonToolbar>
<Link className="btn btn-outline-info btn-block" onClick={() => this.setState({ addModalShow: true })} role="button">Add Diet Food</Link>
 <Add_DietFood show={this.state.addModalShow}
    onHide={addModalClose} /> 
</ButtonToolbar> 
            </section>

        )
    }
}
