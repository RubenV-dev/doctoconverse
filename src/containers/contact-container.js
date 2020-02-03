import React from 'react';
import Provider from '../components/provider'

export default class ContactContainer extends React.Component {

    state={
        doctors: []
    }

    componentDidMount(){
        fetch(`http://localhost:3000/doctors`)
        .then(resp => resp.json())
        .then(json_resp => {
            this.setState({
                doctors: json_resp
            })
        })
    }

    handleNot = (a, b) => {
        // placeholder for call feature
    }

    renderProvider = () => {
        return this.state.doctors.map(doctor => <Provider key={doctor.id} doctor={doctor} handleClick={this.handleNot} info={null} />)
    }

    render(){
       return (
        <div className="provider-container">
            {this.renderProvider()}
        </div>
        );
    }
}