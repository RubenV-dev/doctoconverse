import React from 'react'
import Gear from '../gear.png'

export default class Banner extends React.Component {

    render(){
       return (
        <div className="banner-container">
            <img className='gear' src={Gear}alt="gear" />
            <img className='gear' src={Gear}alt="gear" />
            <img className='gear' src={Gear}alt="gear" />
           <div className="banner"> DoctoConverse </div>
           <img className='gear' src={Gear}alt="gear" />
           <img className='gear' src={Gear}alt="gear" />
           <img className='gear' src={Gear}alt="gear" />
        </div>);
    }
}