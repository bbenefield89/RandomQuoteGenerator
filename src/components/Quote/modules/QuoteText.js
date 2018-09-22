import React, { Component } from "react";
import styled from "styled-components";

import { getQuoteContent } from '../../../actions'
import { connect } from 'react-redux';

const QuoteBody = styled.p``;

const Quotation = styled.span`
  font-size: 50px;
  margin-right: 20px;
  position: relative;
  top: 20px;
`

const QuoteAuthor = styled(QuoteBody)`
  text-align: right;
`

class QuoteText extends Component {
  componentDidMount() {
    this.props.getQuoteContent()
  }
  
  render() {
    return (
      <React.Fragment>
        <QuoteBody>
          {this.props.quote.quote}
        </QuoteBody>

        <QuoteAuthor>
          - {this.props.quote.author}
        </QuoteAuthor>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return { quoteContent: state }
}

export default connect(mapStateToProps, { getQuoteContent })(QuoteText)
