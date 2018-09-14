import React from 'react';

const QuoteText = props => {
  console.log(props)
  return (
    <React.Fragment>
      <p>{ props.quote.quote }</p>
      <p>{ props.quote.author }</p>
    </React.Fragment>
  );
}
 
export default QuoteText;