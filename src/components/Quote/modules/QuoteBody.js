import React from 'react';
import PropTypes from 'prop-types'
import { Spring } from 'react-spring'
import styled from 'styled-components'

const StyledQuoteBody = styled.p`
  font-size: 2rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
`

const QuoteBody = props => {
  const { quote } = props
  
  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      reset={ true }
    >
      {
        styles => (
          <StyledQuoteBody style={ styles }>
            { quote }
          </StyledQuoteBody>
        )
      }
    </Spring>
  );
}
 
export default QuoteBody;