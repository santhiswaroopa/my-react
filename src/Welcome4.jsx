import React, { Component } from "react";
class Welcome4 extends Component {
    constructor(props) {
        super(props);

        this.message="Hello " + props.name;
    }
    render() {
        return <h2>{this.message}</h2>;
    }
}
export default Welcome4;