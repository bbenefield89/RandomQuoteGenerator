import React, { Component } from "react"

import GitHubCorner from 'react-github-corner'

import QuoteContainer from "./components/Quote/QuoteContainer"

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <GitHubCorner href='https://github.com/bbenefield89/RandomQuoteGenerator' />
        <QuoteContainer />
      </React.Fragment>
    )
  }
}

export default App
