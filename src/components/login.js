import React from 'react';

export default class Login extends React.Component {

    render(){
       return (
        <div className="login">
           Login Here
           <form onSubmit={(e) => this.props.handleSignIn(e)}>
               <input type="text" name="username" placeholder="Username" value={this.props.username} onChange={(e) => this.props.handleUser(e.target.value)} />
               <br />
               <input type="text" name="password" placeholder="Password" value={this.props.password} onChange={(e) => this.props.handlePassword(e.target.value)} />
               <br />
               <input type="submit" value="submit" />  
           </form>
        </div>);
    }
}