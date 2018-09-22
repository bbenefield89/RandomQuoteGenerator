import axios from 'axios'

export const GET_QUOTE_CONTENT = 'GET_QUOTE_CONTENT'
export const ERROR = 'ERROR'

export const getQuoteContent = () => {
  return dispatch => {
    const quotesURL = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;
    
    axios(quotesURL)
      .then(({ data }) => {
        console.log('getQuoteContent: ', data.quotes)
        dispatch({
          type: GET_QUOTE_CONTENT,
          payload: data.quotes
        })
      })
      .catch(err => {
        console.log('getQuoteContent Error: ', err)
        dispatch({
          type: ERROR,
          payload: err
        })
      })
  }
}