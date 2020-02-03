import React from 'react';

export default class Faq extends React.Component {

    state={
        card1: false,
        card2: false,
        card3: false,
        card4: false
    }

    handleOne = () => {
        this.setState((prevState) => {
            return {
                card1: !prevState.card1
            }
        }
        )
    }

    handleTwo = () => {
        this.setState((prevState) => {
            return {
                card2: !prevState.card2
            }
        }
        )
        
    }

    handleThree = () => {
        this.setState((prevState) => {
            return {
                card3: !prevState.card3
            }
        }
        )
        
    }

    handleFour = () => {
        this.setState((prevState) => {
            return {
                card4: !prevState.card4
            }
        }
        )
        
    }

    render(){
       return (
           <div className="faq-container">
               <h1>FAQ</h1>
                <div className="card-container">
                    <div className="card" onClick={this.handleOne}>
                        <p>Is this service free?</p>
                        {this.state.card1? "hell Nah": null}
                    </div>
                    <div className="card" onClick={this.handleTwo}>
                        <p>Does a doctor own this site?</p>
                        {this.state.card2? "hell Nah": null}
                    </div>
                    <div className="card" onClick={this.handleThree}>
                        <p>What is the purpose of this site?</p>
                        {this.state.card3? "hell Nah": null}
                    </div>
                    <div className="card" onClick={this.handleFour}>
                        <p>Who is your father?</p>
                        {this.state.card4? "hell Nah": null}
                    </div>
                </div>
           </div>
       )
    }
}