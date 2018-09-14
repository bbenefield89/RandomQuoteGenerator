import React, { Component } from 'react';
import axios from 'axios';

import Anchor from '../misc/Anchor'
import Button from '../misc/Button';
import QuoteText from './modules/QuoteText';

class QuoteContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteContent: {
        quote: '',
        author: ''
      },
      tweetURL: 'https://twitter.com/intent/tweet?hashtags=quotes&text='
    }
  }
  
  // getRandomQuote
  getRandomQuote = () => {
    const quoteURL = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;
    
    axios(quoteURL)
      .then(({ data }) => {
        const { quotes } = data
        const dataLength = quotes.length;
        const rand       = Math.floor(Math.random() * (dataLength - 1))
        const { quote, author } = quotes[ rand ]
        let { tweetURL } = this.state

        tweetURL += `"${ quote }" ${ author }`

        this.setState({ 
          quoteContent: {
            quote,
            author
          },
          tweetURL
        })
      })
      .catch(err => console.log(err))
  }

  // componentDidMount
  componentDidMount() {
    this.getRandomQuote()
  }
  
  // render
  render() {
    return (
      <div>
        <QuoteText quote={ this.state.quoteContent } />

        <Anchor
          targetATTR='_blank'
          title='Tweet this quote!'
          tweetURL={ this.state.tweetURL }
          value='Tweet This'
        />

        <Button
          title='Generate a new quote'
          value='New quote'
          getRandomQuote={ this.getRandomQuote }
        />
      </div>
    );
  }
}
 
export default QuoteContainer;