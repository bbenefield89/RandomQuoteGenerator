import React from "react";
import PropTypes from 'prop-types'
import styled from "styled-components";

const StyledButton = styled.button`
  background: #50B1A7
  border: none;
  border-radius: 3px;
  color: #fdfdfd;
  padding: 5px;
`;

const Button = props => {
  return (
    <React.Fragment>
      <StyledButton
        title={ props.title }
        onClick={ props.getQuoteContent }
      >
        { props.value }
      </StyledButton>
    </React.Fragment>
  );
};

Button.propTypes = {
  getQuoteContent: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}

export default Button;
