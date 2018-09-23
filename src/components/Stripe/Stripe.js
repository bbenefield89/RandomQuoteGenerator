import React from 'react'
import axios from 'axios'
import StripeCheckout from 'react-stripe-checkout'
import styled from 'styled-components'

const StyledP = styled.p`
  color: #fefefe;
`

const StyledSub = styled.small`
  color: #fefefe;
`

const Stripe = () => {
  const onToken = token => {
    const req = {
      method: 'POST',
      url: 'http://localhost:3001/donations',
      data: token
    }
    
    axios(req)
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }
  
  return (
    <React.Fragment>
      <StyledP>Consider Donating only $1.34USD to me for no reason at all</StyledP>

      <StripeCheckout
        email='bsquared18@gmail.com'
        token={ onToken }
        stripeKey='pk_test_sm2QijqfOE0vqBK0c7W0CYGV'
      />
    </React.Fragment>
  )
}
 
export default Stripe