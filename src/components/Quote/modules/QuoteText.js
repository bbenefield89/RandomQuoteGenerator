import React from "react";
import { bool, string } from 'prop-types'
import styled from "styled-components";
import { connect } from 'react-redux'

const QuoteBody = styled.p``;

// const Quotation = styled.span`
//   font-size: 50px;
//   margin-right: 20px;
//   position: relative;
//   top: 20px;
// `

const QuoteAuthor = styled(QuoteBody)`
  text-align: right;
`

const QuoteText = props => {
  const { author, gettingQuotes, quote } = props
  
  return (
    gettingQuotes
    ?
      <p>Retrieving quotes...</p>
    :
      <React.Fragment>
        <QuoteBody>
          { quote }
        </QuoteBody>

        <QuoteAuthor>
          - { author }
        </QuoteAuthor>
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
