import React from 'react';

export default class Welcome extends React.Component {

    render(){
       return (
       <div className="welcome">
           <h1>Welcome</h1>
           <p>DoctoConverse is the worlds leading communication expert in connecting patients with the appropraite provider.</p>
           <p>Please be specific when describing your ailment and remember the more relavent information given the more accurate our site will be in connecting you to the appropriate person</p>
           <p>Please be aware that members of this site are willing to help patients but it is your responsibility to handle your finances with the corresponding providers office.</p>
        </div>);
    }
}