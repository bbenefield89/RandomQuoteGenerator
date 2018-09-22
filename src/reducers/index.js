import { GET_QUOTE_CONTENT } from '../actions'

const initialState = {
  gettingQuotes: true,
  quotes: []
}

export const getQuoteContent = (state=initialState, action) => {
  switch (action.type) {
    case GET_QUOTE_CONTENT:
      console.log('\n\nGET_QUOTE_CONTENT REDUCER CALLED\n\n')

    default:
      return state
  }
}