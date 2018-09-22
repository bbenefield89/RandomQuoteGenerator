import React from "react"
import { Container, Row, Col } from "reactstrap"
import styled from "styled-components"

import ButtonsContainer from '../ButtonsContainer/ButtonsContainer'
import QuoteText from "./modules/QuoteText"

const StyledContainer = styled(Container)`
  background: #fdfdfd;
  border-radius: 3px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  margin-left: 1rem !important;
  margin-right: 1rem !important;
  padding: 20px;
  max-width: 600px !important;
`

const QuoteContainer = () => {
  return (
    <StyledContainer className="quote-container">
      <Row>
        <Col>
          <QuoteText />
        </Col>
      </Row>

      <Row>
        <Col>
          <ButtonsContainer />
        </Col>
      </Row>
    </StyledContainer>
  )
}

export default QuoteContainer