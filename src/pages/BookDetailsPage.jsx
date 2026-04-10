import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function BookDetailsPage() {
  const { id } = useParams()
  const [book, setBook] = useState(null)

  useEffect(() => {
    fetch(`https://seussology.info/api/books/${id}`)
      .then((response) => response.json())
      .then((data) => setBook(data))
  }, [id])

  if (!book) {
    return <p>Loading book details...</p>
  }

  return (
    <div className="details-page">
      <h2>{book.title}</h2>
      <img src={book.image} alt={book.title} className="details-image" />
      <p>{book.description}</p>
    </div>
  )
}

export default BookDetailsPage
