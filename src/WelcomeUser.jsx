import React, {Component} from "react";
class WelcomeUser extends Component{
    constructor(props){
        super(props);

        this.fullname="Welcome " + props.fname+" "+props.lname;
    }
    render(){
        return <h2>{this.fullname}</h2>
    }
}
export default WelcomeUser;