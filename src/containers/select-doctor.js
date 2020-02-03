import React from 'react';
import Forminfo from '../components/form-info'
// import Docchoose from '../components/docchoose'
import Provider from '../components/provider'
import { withRouter } from 'react-router-dom';


class SelectDoctorContainer extends React.Component {
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

    handleDoctorChoice = (docObj) => {
        // console.log(docObj, info)

        fetch(`http://localhost:3000/problems`, {
          method:'POST',
         headers: { 
             'Content-type': 'application/json',
             'accept': 'application/json'
         },
         body: JSON.stringify({
            category: docObj.specialty,
            user_id: 1,
            doctor_id: docObj.id
          })
        })
        .then(resp => resp.json())
        .then(json_resp => {
            console.log(json_resp)
        })
    }


    renderDocs = () => {
        // let filterArr = [...this.state.doctors]
        // debugger;
        // let filteredArray = filterArr.filter(doctor => doctor.category === this.props.info.category)
        return this.state.doctors.map((doctor, index) => <Provider key={index} doctor={doctor} handleClick={this.handleDoctorChoice} info={this.props.info}/>)
    }
    render(){
        // console.log(this.props.info)
       return (
        <div className="random">
        <div className="sel-doc-cont">
            <Forminfo info={this.props.info}/>
        </div>
        Choose Your Doctor:
        <div className="doct-select">
        {this.renderDocs()}
        </div>
        </div>
        );
    }
}

export default withRouter(SelectDoctorContainer)