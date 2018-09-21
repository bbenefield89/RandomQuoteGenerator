import React from "react";
import styled from "styled-components";

const StyledAnchor = styled.a`
  background: #50B1A7
  border-radius: 3px;
  color: #fdfdfd;
  padding: 5px;
`;

const Anchor = props => {
  return (
    <StyledAnchor
      href={props.tweetURL}
      target={props.targetATTR}
      title={props.title}
    >
      {props.value}
    </StyledAnchor>
  );
};

export default Anchor;
