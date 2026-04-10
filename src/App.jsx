import { Link, Route, Routes } from 'react-router-dom'
import BooksPage from './pages/BooksPage'
import BookDetailsPage from './pages/BookDetailsPage'
import QuotesPage from './pages/QuotesPage'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="site-header">
        <h1>Seuss Treasury</h1>
        <nav className="site-nav">
          <Link to="/books">Books</Link>
          <Link to="/quotes">Quotes</Link>
        </nav>
      </header>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<BooksPage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/books/:id" element={<BookDetailsPage />} />
          <Route path="/quotes" element={<QuotesPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
