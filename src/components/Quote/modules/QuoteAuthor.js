import React from 'react'
import PropTypes from 'prop-types'
import { Spring } from 'react-spring'
import styled from 'styled-components'

const StyledQuoteAuthor = styled.p`
  text-align: right;
`

const QuoteAuthor = props => {
  const { author } = props
  
  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      reset={ true }
    >
      {
        styles => (
          <StyledQuoteAuthor style={ styles }>
            { author }
          </StyledQuoteAuthor>
        )
      }
    </Spring>
  )
}
 
export default QuoteAuthor