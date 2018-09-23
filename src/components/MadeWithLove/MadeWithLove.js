import React from 'react'
import { Row, Col } from 'reactstrap'
import styled from 'styled-components'

const StyledP = styled.p`
  color: #fefefe;
`
const StyledA = styled.a`
  color: #010101 !important;
  text-decoration: none !important;
`

const MadeWithLove = () => {
  return (
    <Row>
      <Col>
        <StyledP>
          Made with <span style={{color: 'red'}} role='img' aria-label='heart emoji'>💙</span> by <StyledA href='https://github.com/bbenefield89'>Brandon Benefield</StyledA>
        </StyledP>
      </Col>
    </Row>
  )
}
 
export default MadeWithLove