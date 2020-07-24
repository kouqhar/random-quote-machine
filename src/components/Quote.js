import React, { Component } from 'react'
import { Link } from 'react-router-dom'
let max;
const quotes = ["Programming isn't about what you know; it's about what you can figure out.", "The only way to learn a new programming language is by writing programs in it.", "Sometimes it's better to leave something alone, to pause, and that's very true of programming.", "In some ways, programming is like painting. You start with a blank canvas and certain basic raw materials. You use a combination of science, art, and craft to determine what to do with them.", "Testing leads to failure, and failure leads to understanding.", "The best error message is the one that never shows up.", "The most damaging phrase in the language is.. it's always been done this way", "Don't write better error messages, write code that doesn't need them.", "Without requirements or design, programming is the art of adding bugs to an empty text file.", "If builders built buildings the way programmers wrote programs, then the first woodpecker that came along would destroy civilization."]

const authors = ["Chris Pine", "Dennis Ritchie", "Joyce Wheeler", "Andrew Hunt", "Burt Rutan", "Thomas Fuchs", "Grace Hopper", "Jason C. McDonald", "Louis Srygley", "Gerald Weinberg"]

class Quote extends Component {
    constructor(props){
        super(props)
        this.state = {
            random : 0,
            min : 0
        }
        this.newquote = this.newquote.bind(this)
    }
    newquote(){
        const { min } = this.state
        this.setState({
            random : Math.floor(Math.random() * (max - min)) + min
        })
    }
    render() {
    const quote = [...quotes[this.state.random]]
    const author = [...authors[this.state.random]]
    max = quotes.length
        return (
            <div id="quote-box" className="quoteBox">
                <div className="quotes">
                    <div id="text" className="quote">
                    <p><span className="quoteMark">&quot;</span>{quote}<span className="quoteMark">&quot;</span></p>
                    </div>
                    <div id="author" className="qAuth"><span>{author}</span></div>
                </div>

                <div className="share">
                    <div className="share-btn">
                        <Link to="twitter.com/intent/tweet" id="tweet-quote"><i className="fab fa-twitter-square"></i></Link>
                        <Link to="facebook.com/intent/share" id="share-quote"><i className="fab fa-facebook-square"></i></Link>
                    </div>
                    <button title="New Quote" id="new-quote" onClick={this.newquote}>new quote</button>
                </div>
            </div>
        )
    }
}

export default Quote
