import React, { Component } from 'react';

export class Footer extends Component {

    render() {
        return (
            <footer id="footer">        
                <div className="container d-md-flex py-4">

                    <div className="me-md-auto text-center text-md-start">
                        <div className="copyright">
                            &copy; Copyright <strong><span>Healthcare</span></strong>. All Rights Reserved
                        </div>
                    </div>
                </div>
          </footer>
        )
    }
}