export const getQuoteItems = () => (
  fetch('quoteItems.json')
  .then(response => (
    response.json()
  ))
  .then(quotes => quotes)
  .catch(error => console.log('the error is ',error))
)
