import React, { Component } from "react";

class Userprofilecard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div class="card">
                <img src={this.props.img} />
                <div class="container">
                    <h4><b>name :- {this.props.name}</b></h4>
                    <p>Email :- {this.props.email}</p>
                </div>
            </div>
        )
    }
}
export default Userprofilecard