import React from "react";
import PropTypes from 'prop-types'
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
      href={ props.tweetURL }
      target='_blank'
      title='Tweet this'
    >
      Tweet this
    </StyledAnchor>
  )
}

Anchor.propTypes = {
  tweetURL: PropTypes.string.isRequired
}

export default Anchor
