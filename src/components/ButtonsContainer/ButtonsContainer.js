import React, { Component } from 'react'
import { connect } from 'react-redux'
import { func, shape, string } from 'prop-types'

import { getQuoteContent } from '../../actions'

import Anchor from '../misc/Anchor'
import Button from '../misc/Button'

class ButtonsContainer extends Component {
  componentDidMount() {
    this.props.getQuoteContent()
  }
  
  render() {
    const { getQuoteContent, tweetURL } = this.props
    
    return (
      <React.Fragment>
        <Anchor
          target='_blank'
          title='Tweet this'
          tweetURL={ tweetURL }
        />
      
        <Button
          getQuoteContent={ getQuoteContent }
          title='Generate a new quote'
          value='Get new quote'
        />
      </React.Fragment>
    );
  }
}

ButtonsContainer.propTypes = {
  getQuoteContent: func.isRequired,
  quoteContent: shape({
    tweetURL: string.isRequired
  }),
}

const mapStateToProps = state => {
  const { tweetURL } = state.quoteContent
  return { tweetURL }
}

export default  connect(mapStateToProps, { getQuoteContent })(ButtonsContainer)