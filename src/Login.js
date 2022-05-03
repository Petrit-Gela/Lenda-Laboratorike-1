import React, { Component } from 'react';
import { Link } from "react-router-dom";

export class Login extends Component {

    render() {
        return (
            <section id="contact" class="py-5 h-100">
            <div class="container text-center">
                <h1 class="display-4 pb-1 border-bottom w-25 mx-auto pt-5 text-dark">Login</h1>
                <div class="row mx-auto">
                    <div class="col-sm-12 col-md-6 col-lg-6 mx-auto">
                        <form class="p-5  my-5" >
                            <div class="form-group text-left">
                                <input type="email" name="email" class="form-control" placeholder="Email..."></input>
                            </div>
                            <div class="form-group text-left">
                                <span>
                                    <input id="password" type="password" name="password" class="form-control" placeholder="Password..."></input>
                                    <i onclick="toggle()" id="eye" class="fa fa-eye" aria-hidden="true" ></i>
                                </span>
                            </div>

                            <button class="btn btn-block btn-outline-secondary mt-5 text-dark" type="submit" name="login">Login</button>
                            <p class="text-left pt-3 text-dark">Not registered yet? <Link to="/WhereToRegister" >Register</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </section>

        )
    }
}
