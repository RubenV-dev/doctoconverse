import React from 'react';


export default class Provider extends React.Component {

    render

    render(){
        let { name, address, specialty, rating, experience } = this.props.doctor
        
        let renderStars = () => {
            let stars = ""
            for (let i = 0; i < rating; i++) {
                stars += "⭐️"
            }
            return stars
        };

       return (
        <div className="provider-card" onClick={(e) => this.props.handleClick(this.props.doctor)}>
            <ul>
                <strong>{name}</strong>
                <li>{address}</li>
                <li>{renderStars()}</li>
                <li>{experience} Years of Experience</li>
                <li>{specialty}</li>
            </ul>
        </div>
        );
    }
}