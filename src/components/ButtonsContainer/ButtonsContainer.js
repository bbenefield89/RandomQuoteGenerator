import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

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
          tweetURL={ tweetURL }
        />
      
        <Button
          title='Generate a new quote'
          value='Get new quote'
          getQuoteContent={ getQuoteContent }
        />
      </React.Fragment>
    );
  }
}

ButtonsContainer.propTypes = {
  getQuoteContent: PropTypes.func.isRequired,
  quoteContent: PropTypes.shape({
    tweetURL: PropTypes.string
  }),
}

const mapStateToProps = state => {
  const { tweetURL } = state.quoteContent
  return { tweetURL }
}

export default  connect(mapStateToProps, { getQuoteContent })(ButtonsContainer)