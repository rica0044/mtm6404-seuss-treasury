import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function BooksPage() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch('https://seussology.info/api/books')
      .then((response) => response.json())
      .then((data) => setBooks(data))
  }, [])

  return (
    <div>
      <h2>Books</h2>
      <div className="books-grid">
        {books.map((book) => (
          <div key={book.id} className="book-card">
            <Link to={`/books/${book.id}`}>
              <img src={book.image} alt={book.title} className="book-image" />
            </Link>
            <h3>{book.title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BooksPage
