import React from "react";
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
  const { gettingQuotes } = props.quoteContent
  const { quote, author } = props.quoteContent.quoteData
  
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

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps)(QuoteText)
