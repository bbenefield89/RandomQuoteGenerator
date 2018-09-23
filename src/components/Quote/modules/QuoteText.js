import React from "react";
import { bool, string } from 'prop-types'
import { connect } from 'react-redux'
import { Spring } from 'react-spring'
import styled from "styled-components";
import QuoteBody from "./QuoteBody";
import QuoteAuthor from "./QuoteAuthor";

const QuoteText = props => {
  const { author, gettingQuotes, quote } = props
  
  return (
    gettingQuotes
    ?
      <p>Retrieving quotes...</p>
    :
      <React.Fragment>
        <QuoteBody quote={ quote } />
        <QuoteAuthor author={ author } />
      </React.Fragment>
  )
}

QuoteText.propTypes = {
  author: string,
  gettingQuotes: bool,
  quote: string
}

const mapStateToProps = state => {
  const { quoteContent } = state
  const { gettingQuotes, quoteData } = quoteContent
  const { author, quote } = quoteData

  return { gettingQuotes, author, quote }
}

export default connect(mapStateToProps)(QuoteText)
