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
    return (
      <React.Fragment>
        <Anchor
          tweetURL={ this.props.quoteContent.tweetURL }
        />
      
        <Button
          title="Generate a new quote"
          value="Get new quote"
          getQuoteContent={ this.props.getQuoteContent }
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
  return state
}

export default  connect(mapStateToProps, { getQuoteContent })(ButtonsContainer)