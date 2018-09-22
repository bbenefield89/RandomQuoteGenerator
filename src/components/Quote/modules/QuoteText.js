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
  return (
    <React.Fragment>
      <QuoteBody>
        QB
      </QuoteBody>

      <QuoteAuthor>
        - QA
      </QuoteAuthor>
    </React.Fragment>
  )
}

const mapStateToProps = state => {
  return state
}

export default QuoteText
