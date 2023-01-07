import React, {Component} from 'react';
import './NextButton.css';

class NextButton extends Component {
    constructor(props){
        super(props);

        this.getNext = this.getNext.bind(this);
    }

    //method that updates the state of app.js to get a new random card when state is updated.
    getNext(){
        this.props.getNext();
    }

    render(props){
        return(
            <div className="buttonContainer">
                <button className="button" 
                    onClick={this.getNext}>Next Card</button>
            </div>
        )
    }
}
export default NextButton