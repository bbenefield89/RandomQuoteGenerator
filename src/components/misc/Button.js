import React from "react";
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
      <StyledButton title={props.title} onClick={props.getRandomQuote}>
        {props.value}
      </StyledButton>
    </React.Fragment>
  );
};

export default Button;
