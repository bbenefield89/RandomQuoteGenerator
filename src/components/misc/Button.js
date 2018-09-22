import React from 'react';
import { func, string } from 'prop-types'
import styled from 'styled-components';

const StyledButton = styled.button`
  background: #50B1A7
  border: none;
  border-radius: 3px;
  color: #fdfdfd;
  padding: 5px;
`;

const Button = props => {
  const { getQuoteContent, title, value } = props
  
  return (
    <StyledButton
      title={ title }
      onClick={ getQuoteContent }
    >
      { value }
    </StyledButton>
  );
};

Button.propTypes = {
  getQuoteContent: func.isRequired,
  title: string.isRequired,
  value: string.isRequired
}

export default Button;
