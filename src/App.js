import React, { Component } from "react"

import GitHubCorner from 'react-github-corner'

import QuoteContainer from "./components/Quote/QuoteContainer"
import MadeWithLove from "./components/MadeWithLove/MadeWithLove";
import Stripe from "./components/Stripe/Stripe";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <GitHubCorner href='https://github.com/bbenefield89/RandomQuoteGenerator' />
        <QuoteContainer />
        <MadeWithLove />
        <Stripe />
      </React.Fragment>
    )
  }
}

export default App
