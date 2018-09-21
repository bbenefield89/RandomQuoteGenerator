import React from "react";
import styled from "styled-components";

const QuoteBody = styled.p``;

const Quotation = styled.span`
  font-size: 50px;
  margin-right: 20px;
  position: relative;
  top: 20px;
`;

const QuoteAuthor = styled(QuoteBody)`
  text-align: right;
`;

const QuoteText = props => {
  return (
    <React.Fragment>
      <QuoteBody>
        <Quotation>"</Quotation>
        {props.quote.quote}
      </QuoteBody>

      <QuoteAuthor>- {props.quote.author}</QuoteAuthor>
    </React.Fragment>
  );
};

export default QuoteText;
