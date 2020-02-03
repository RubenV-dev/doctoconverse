import React from 'react';


export default class FormInfo extends React.Component {

    render(){
        // let {issue, category, comment} = this.props.info
        // console.log(issue, category, comment)
        console.log(this.props.info)
       return (
        <div className="post-info">
            <ul>
                <li>Name: {this.props.info.name} </li>
                <li>issue: {this.props.info.issue}</li>
                <li>category: {this.props.info.category}</li>
                <li>Comment: {this.props.info.comment}</li>
            </ul> 
        </div>
        );
    }
}