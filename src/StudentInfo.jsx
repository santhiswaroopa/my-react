import React, {Component} from "react";
class StudentInfo extends Component {
    render() {
        const a=parseInt(this.props.marks1);
        const b=parseInt(this.props.marks2);
        const c=parseInt(this.props.marks3);
        const total=a+b+c;
    
    return(
       <div>
        <h2>Student Name: {this.props.name}</h2>
        <h2>Course: {this.props.course}</h2>
        <h2>Total Marks:{total}</h2>
       </div> 
    )}
}
export default StudentInfo;