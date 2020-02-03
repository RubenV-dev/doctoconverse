import React from 'react';

class EditForm extends React.Component {

    state = {
        name: this.props.user.name,
        age: this.props.user.age,
        ethnicity: this.props.user.ethnicity,
        gender: this.props.user.gender,
        address: this.props.user.address,
        allergies: this.props.user.allergies,
        history: this.props.user.history,
        id: this.props.user.id,
        username: this.props.user.username,
        password_digest: this.props.user.password_digest
    }

    handleChange= (event) => {
        // console.log(event.target.value, event.target.name)
        let value = event.target.value
        let statekey = event.target.name
        this.setState({
            [statekey]: value
        })
    }
    render(){
        // console.log(this.state)
        // let { name, age, ethnicity, gender, address, allergies, history, id} = this.state
       return (
        <div className="issue">
            <div className="issue-form">
           <strong>Edit User Info</strong>
           <br />
           <form onSubmit={(e) => {
               e.preventDefault();
               this.props.handleSubmit(this.state)
               }}>
               <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/><br />
               <input type="text" name="age" value={this.state.age} onChange={this.handleChange}/> <br />
               <input type="text" name="ethnicity" value={this.state.ethnicity} onChange={this.handleChange}  /><br/>
               <input type="text" name="gender" value={this.state.gender} onChange={this.handleChange} /><br/>
               <input type="text" name="address" value={this.state.address} onChange={this.handleChange}/><br/>
               <input type="text" name="allergies" value={this.state.allergies} onChange={this.handleChange}/><br/>
               <input type="text" name="history" value={this.state.history} onChange={this.handleChange} /><br/>
               <input type="submit" value="submit" />  
           </form>
           </div>
        </div>);
    }
}

export default EditForm;