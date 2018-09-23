import React from 'react';
import { func, string } from 'prop-types'
import styled from 'styled-components';

const StyledButton = styled.button`
  background: hsla(174, 38%, 50%, 1);
  border: 1px solid hsl(173, 32%, 36%);
  border-radius: 3px;
  box-shadow: 0 1px 0px hsl(173, 32%, 36%);
  border-radius: 3px;
  color: #fdfdfd;
  padding: 5px;
  text-shadow: 0 1px 0 hsl(173, 32%, 36%);
  transition: background 0.25s
  
  &:hover {
    background: hsla(174, 48%, 50%, 1);
    cursor: pointer;
    text-shadow: 0 1px 0 hsl(173, 32%, 36%);
  }

  &:active {
    background: hsla(174, 33%, 50%, 1);
    box-shadow: inset 0 1px 0 hsl(173, 32%, 36%);
    text-shadow: none;
  }
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
