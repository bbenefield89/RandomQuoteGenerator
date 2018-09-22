import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getQuoteContent } from '../../actions'

import Anchor from '../misc/Anchor'
import Button from '../misc/Button'

class ButtonsContainer extends Component {
  componentDidMount() {
    this.props.getQuoteContent()
  }
  
  render() {
    console.log(this.props.quoteContent)
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
 
const mapStateToProps = state => {
  return state
}

export default  connect(mapStateToProps, { getQuoteContent })(ButtonsContainer)