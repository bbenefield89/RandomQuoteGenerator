import React, { Component } from "react";
import axios from "axios";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";

import ButtonsContainer from '../ButtonsContainer/ButtonsContainer'
import QuoteText from "./modules/QuoteText";

const StyledContainer = styled(Container)`
  background: #fdfdfd;
  border-radius: 3px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  margin-left: 1rem !important;
  margin-right: 1rem !important;
  padding: 20px;
  max-width: 600px !important;
`;

class QuoteContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteContent: {
        quote: '',
        author: ''
      },
      tweetURL: '',
      baseURL: 'https://twitter.com/intent/tweet?hashtags=quotes&text='
    }
  }

  // getRandomQuote
  getRandomQuote = () => {
    const quotesURL = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;
    
    axios(quotesURL)
      .then(({ data }) => {
        const { quotes }        = data
        const dataLength        = quotes.length;
        const rand              = Math.floor(Math.random() * (dataLength))
        const { quote, author } = quotes[ rand ]
        let tweetURL            = this.state.baseURL

        tweetURL += `"${quote}" ${author}`;

        this.setState({
          quoteContent: {
            quote,
            author
          },
          tweetURL
        });
      })
      .catch(err => console.log(err));
  };

  // componentDidMount
  componentDidMount() {
    this.getRandomQuote();
  }

  // render
  render() {
    return (
      <StyledContainer className="quote-container">
        <Row>
          <Col>
            <QuoteText quote={this.state.quoteContent} />
          </Col>
        </Row>

        <Row>
          <Col>
            <ButtonsContainer
              // TODO: SEND DOWN VALUES FOR baseURL, tweetURL, and quoteContent
            />
          </Col>
        </Row>
      </StyledContainer>
    );
  }
}

export default QuoteContainer;
