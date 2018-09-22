import React from 'react'
import styled from 'styled-components'

import Anchor from '../misc/Anchor'
import Button from '../misc/Button'

const ButtonsContainer = props => {
  return (
    
    <React.Fragment>
      <Anchor
        targetATTR="_blank"
        title="Tweet this quote!"
        tweetURL={ props.tweetURL }
        value="Tweet This"
      />
    
      <Button
        title="Generate a new quote"
        value="New quote"
        getRandomQuote={ props.getRandomQuote }
      />
    </React.Fragment>
  );
}
 
export default ButtonsContainer;