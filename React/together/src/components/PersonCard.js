import React, { Component } from "react";
class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: props.age,
            lastName: props.lastName,
            firstName: props.firstName,
            hairColor: props.hairColor,
        };
    }
    incrementAge = () => {
        this.setState({
            age: this.state.age + 1,
        });
    };
    render() {
        return (
            <div>
                <h2>
                    {this.state.lastName}, {this.state.firstName}
                </h2>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {this.state.hairColor}</p>
                <button onClick={this.incrementAge}>Happy Birthday</button>
            </div>
        );
    }
}

export default PersonCard;
