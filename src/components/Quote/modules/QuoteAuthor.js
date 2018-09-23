import React from 'react'
import { string } from 'prop-types'
import { Spring } from 'react-spring'
import { connect } from 'react-redux'
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
 
QuoteAuthor.propTypes = {
  author: string.isRequired
}

const mapStateToProps = state => {
  const { author } = state.quoteContent.quoteData
  return { author }
}

export default connect(mapStateToProps)(QuoteAuthor)