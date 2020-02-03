import React from 'react';
import Welcome from '../components/welcome'
import Login from '../components/login'
import Sidebar from '../containers/sidebar'
import Profile from '../components/profile'
import Issue from '../components/issue'
import Contact from '../components/contact'
import Faq from '../components/faq'
import ContactContainer from './contact-container'
import SelectDoctorContainer from './select-doctor'
import { Route, Switch } from 'react-router-dom'

export default class Main extends React.Component {

    state={
        logged: false,
        username : "",
        password: "",
        issueArr: [],
        users: []
    }

    handleSignIn = (e) => {
        e.preventDefault()
        this.setState((prevState) => {
            return {
                logged: !prevState.logged
            }
        }
        )
    }

    handleUser = (text) => {
        this.setState({username: text})
    }

    handlePassword = (text) => {
        this.setState({password: text})
    }

    handleIssue = (formState) => {
        this.setState((prevState) => {
            return {
                issueArr : [...prevState.issueArr, formState]
            }
        }
        )
    }

    compRender = () => {
        if (!this.state.logged) {
            return (
            <>
            <Login handleSignIn={this.handleSignIn} handleUser={this.handleUser} handlePassword={this.handlePassword} username={this.state.username} password={this.state.password}/>
            <Welcome/>
            </>
            )
        }
        else {
            return (
                <>
                <Sidebar /> 
                <Profile user={this.state.users[0]}/>
                </>
            ) 
        }
    }

    issueRender = () => {
        return  <Issue handleSubmit={this.handleIssue}/>
    }

    selectRender = () => {
        return <SelectDoctorContainer info={this.state.issueArr[0]} users={this.state.users} />
    }

    componentDidMount(){
        fetch(`http://localhost:3000/users`)
        .then(resp => resp.json())
        .then(json_resp => {
            this.setState({
                users: json_resp
            })
        })
    }

    render(){
        // console.log(this.state)
       return (
        <div className="main">
            <Switch>
            <Route exact path="/" render={ this.compRender } />
            <Route path="/create-issue" render={ this.issueRender } />
            <Route path="/contact-us" component={ Contact } />
            <Route path="/faq" component={ Faq } />
            <Route path="/provider-contact" component={ ContactContainer } />
            <Route path="/select-doctor" component={ this.selectRender } />
            </Switch>
        </div>);
    }
}