import React from 'react';
import profilehead from '../profilehead.png'
import EditForm from './editform'

export default class Profile extends React.Component {
  
  state={
    edit: false,
    user: this.props.user
  }

  handleEdit = () => {
    this.setState((prevState) => {
      return {
        edit: !prevState.edit
      }
    }
    )
  }

  handleSubmit = (stuff) => {
    fetch(`http://localhost:3000/users/${stuff.id}`, {
      method:'PATCH',
     headers: { 
         'Content-type': 'application/json',
         'accept': 'application/json'
     },
     body: JSON.stringify(stuff)
    })
    .then(resp => resp.json())
    .then(json_resp => {
      this.setState((prevState) => {
        return {
          user: stuff,
          edit: !prevState.edit
        }
      }
      )
    })
  }

    render(){
      console.log(this.state)
      // let { name, age, ethnicity, gender, address, allergies, history} = this.props.user
       return (
        <div className="profile">
          <strong>My Profile</strong><br/>
          <img id="profilehead" src={profilehead} alt="profilehead" />
          <ul>
          <li>{this.state.user.name}</li>
          <li>Age: {this.state.user.age}</li>
          <li>Ethnicity: {this.state.user.ethnicity}</li>
          <li>Gender: {this.state.user.gender}</li>
          <li>Address: {this.state.user.address}</li>
          <li>Allergies: {this.state.user.allergies}</li>
          <li>Medical History: {this.state.user.history}</li>
          </ul>
          <button onClick={this.handleEdit}>Edit User </button>
          {this.state.edit? <EditForm user={this.state.user} handleSubmit={this.handleSubmit} /> : null}
        </div>);
    }
}