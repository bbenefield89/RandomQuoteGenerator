import React from "react";
import { connect } from 'react-redux'
import { bool } from 'prop-types'

import QuoteBody from "./QuoteBody";
import QuoteAuthor from "./QuoteAuthor";

const QuoteInformationContainer = props => {
  const { gettingQuotes } = props
  
  return (
    gettingQuotes
    ?
      <p>Retrieving quotes...</p>
    :
      <React.Fragment>
        <QuoteBody />
        <QuoteAuthor />
      </React.Fragment>
  )
}

QuoteInformationContainer.propTypes = {
  gettingQuotes: bool
}

const mapStateToProps = state => {
  const { gettingQuotes } = state.quoteContent
  return { gettingQuotes }
}

export default connect(mapStateToProps)(QuoteInformationContainer)
