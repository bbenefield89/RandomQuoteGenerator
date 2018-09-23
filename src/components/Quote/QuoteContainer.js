import React from "react"
import { Container, Row, Col } from "reactstrap"
import styled from "styled-components"

import ButtonsContainer from '../ButtonsContainer/ButtonsContainer'
import QuoteInformationContainer from "./modules/QuoteInformationContainer"

const StyledContainer = styled(Container)`
  background: #fdfdfd;
  border-radius: 3px;
  box-shadow: 0 2px 4px hsl(173,32%,36%);
  margin-left: 1rem !important;
  margin-right: 1rem !important;
  margin-bottom: 2rem !important
  padding: 20px;
  max-width: 600px !important;
`

const ButtonsContainerCol = styled(Col)`
  display: flex;
  justify-content: space-between;
`

const QuoteContainer = () => {
  return (
    <StyledContainer className="quote-container">
      <Row>
        <Col>
          <QuoteInformationContainer />
        </Col>
      </Row>

      <Row>
        <ButtonsContainerCol>
          <ButtonsContainer />
        </ButtonsContainerCol>
      </Row>
    </StyledContainer>
  )
}

export default QuoteContainer