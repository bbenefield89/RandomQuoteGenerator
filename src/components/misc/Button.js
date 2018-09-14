import React from 'react';

const Button = props => {
  return (
    <React.Fragment>
      <button
        title={ props.title }
        onClick={ props.getRandomQuote }
      >
        { props.value }
      </button>
    </React.Fragment>
  );
}
 
export default Button;