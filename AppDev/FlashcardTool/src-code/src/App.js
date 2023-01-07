import React, { Component } from 'react';
import './App.css';
import Card from './Card/Card';
import NextButton from './NextCardButton/NextButton';
// import cards from './Data/data.json'
import axios from 'axios';



class App extends Component { 
    constructor(props){
        super(props);

     
        this.updateCard = this.updateCard.bind(this);
        //set state to empty
        this.state = {
            cards: [],
            currentCard: {}
        }

    }


    componentDidMount(){
        // const currentCards = this.state.cards;
        //console.log(cards);
        // currentCards.push(...cards.cards); 


        axios.get('http://localhost:3001/cards')
            .then(res => {
                console.log(res);
                console.log(res.data);
     
                this.setState({
                    cards: res.data,
                    currentCard: this.getRandomCard(res.data)
        }) 
        
        }) 
        console.log(this.state.cards[0])
            console.log(this.state.currentCard)
            // .then({
            //     currentCard.push(...this.state.cards.cards);
            // })
            // currentCard: this.getRandomCard(this.state.cards.cards) 
    
}



    getRandomCard(currentCards) {
        console.log("currecnt card: " , currentCards.length)
        var randomIndex = Math.floor(Math.random() * currentCards.length);
        var card = currentCards[randomIndex];
        if (card === this.state.currentCard) {
            this.getRandomCard(currentCards)
        }
        console.log(card)
        return (card);
    }

    updateCard(){
        const currentCards = this.state.cards;
        this.setState({
            currentCard: this.getRandomCard(currentCards)
        })
    }
    render(){
    return (
        <div className="App">
            <div className="cardRow"> 
        
            <Card Question={this.state.currentCard.Question} 
                    Answer={this.state.currentCard.Answer}
            />
            </div>
            <div className="buttonRow">
                <NextButton getNext={this.updateCard} />
            </div>
        </div>
    );
    }
}

export default App;
