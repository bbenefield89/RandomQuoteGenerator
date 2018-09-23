import React from "react";
import { string } from 'prop-types'
import styled from "styled-components";

const StyledAnchor = styled.a`
  background: hsla(174, 38%, 50%, 1);
  border: 1px solid hsl(173, 32%, 36%);
  border-radius: 3px;
  box-shadow: 0 1px 0px hsl(173, 32%, 36%);
  color: #fdfdfd;
  padding: 5px;
  text-decoration: none !important
  text-shadow: 0 1px 0 hsl(173, 32%, 36%);
  transition: background 0.25s
  
  &:hover {
    background: #50b1a7e6;
    color: #fdfdfd;
    cursor: pointer;
    text-shadow: 0 1px 0 hsl(173, 32%, 36%);
  }

  &:active {
    background: hsla(174, 33%, 50%, 1);
    box-shadow: inset 0 1px 0 hsl(173, 32%, 36%);
    text-shadow: none;
  }
`;

const Anchor = props => {
  const { target, title, tweetURL } = props
  
  return (
    <StyledAnchor
      href={ tweetURL }
      target={ target }
      title={ title }
    >
      Tweet this
    </StyledAnchor>
  )
}

Anchor.propTypes = {
  target: string.isRequired,
  title: string.isRequired,
  tweetURL: string.isRequired
}

export default Anchor
