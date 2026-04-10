import { useEffect, useState } from 'react'

function QuotesPage() {
  const [quotes, setQuotes] = useState([])

  useEffect(() => {
    fetch('https://seussology.info/api/quotes/random/10')
      .then((response) => response.json())
      .then((data) => setQuotes(data))
  }, [])

  return (
    <div>
      <h2>Random Quotes</h2>
      <div className="quotes-list">
        {quotes.map((quote) => (
          <div key={quote.id} className="quote-card">
            <p>"{quote.text}"</p>
            <p><strong>{quote.book.title}</strong></p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default QuotesPage
