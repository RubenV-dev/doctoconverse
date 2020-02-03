import React from 'react';
import { withRouter } from 'react-router-dom';

class Issue extends React.Component {

    state = {
        name: "",
        issue: "",
        category: "Primary Care",
        comment: ""
    }

    handleNameChange = (text) => {
        this.setState({
            name: text
        })
    }

    handleIssueChange = (text) => {
        this.setState({
            issue: text
        })
    }

    handleCatChange = (text) => {
        this.setState({
            category: text
        })
    }

    handleCommentChange = (text) => {
        this.setState({
            comment: text
        })
    }

    render(){
       return (
        <div className="issue">
            <div className="issue-form">
           <strong>Create an Issue</strong>
           <br />
           <form onSubmit={(e) => {
               e.preventDefault();
               this.props.history.push('/select-doctor');
               this.props.handleSubmit(this.state);
               }}>
               <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={(e) => this.handleNameChange(e.target.value)} /><br />
               <input type="text" name="issue" placeholder="Issue" value={this.state.issue} onChange={(e) => this.handleIssueChange(e.target.value)}   /><br />
               Doctor Category: 
           <select value={this.state.category} onChange={(e) => this.handleCatChange(e.target.value)} >
                <option value="Primary Care"> Primary Care</option>
                <option value="Dentistry"> Dentistry</option>
                <option value="Dermatology"> Dermatology</option>
                <option value="Gastroenterology"> Gastroenterology</option>
           </select><br/>
               <textarea type="text" rows="4" cols="50" name="comment" placeholder="Additional Comment" value={this.state.comment} onChange={(e) => this.handleCommentChange(e.target.value)}   /><br/>
               <input type="submit" value="Create Issue" />  
           </form>
           </div>
        </div>);
    }
}

export default withRouter(Issue);