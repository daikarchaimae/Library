import React,{useState} from "react";

import BookCard from "./BookCard";


function BookList({ books }) {
  const [genreFilter, setGenreFilter] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 5;

  // Filtrer par genre
  const filteredBooks = books.filter((book) =>
    genreFilter ? book.genre === genreFilter : true
  );

  // Recherche par titre
  const searchedBooks = filteredBooks.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Trier par année ou note
  const sortedBooks = [...searchedBooks].sort((a, b) => {
    if (sortOption === "year-asc") return a.publicationYear - b.publicationYear;
    if (sortOption === "year-desc") return b.publicationYear - a.publicationYear;
    if (sortOption === "rating-asc") return a.rating - b.rating;
    if (sortOption === "rating-desc") return b.rating - a.rating;
    return 0;
  });

  // Pagination
  const totalPages = Math.ceil(sortedBooks.length / booksPerPage);
  const displayedBooks = sortedBooks.slice(
    (currentPage - 1) * booksPerPage,
    currentPage * booksPerPage
  );

  return (
    <div>
      {/* Filtres et Recherche */}
      <div className='star' style={{ marginBottom: "20px" }}>
        <label>
          Filtrer par genre :{" "}
          <select
            value={genreFilter}
            onChange={(e) => setGenreFilter(e.target.value)}
          >
            <option value="">Tous</option>
            <option value="Dystopian">Dystopian</option>
            <option value="Classic">Classic</option>
            <option value="Romance">Romance</option>
            <option value="Adventure">Adventure</option>
            <option value="Historical Fiction">Historical Fiction</option>
            <option value="Philosophical Fiction">Philosophical Fiction</option>
          </select>
        </label>

        <label style={{ marginLeft: "20px" }}>
          Trier par :{" "}
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="">Aucun</option>
            <option value="year-asc">Année croissante</option>
            <option value="year-desc">Année décroissante</option>
            <option value="rating-asc">Note croissante</option>
            <option value="rating-desc">Note décroissante</option>
          </select>
        </label>

        <label style={{ marginLeft: "20px" }}>
          Rechercher par titre :{" "}
          <input className="Rechercher"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </label>
      </div>

     
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {displayedBooks.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>

     
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <button className="precedent"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Précédent
        </button>
        <span style={{ margin: "0 10px",color:'black',fontWeight:"bold" }}>
          Page {currentPage} sur {totalPages}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages} className="suivant"
        >
          Suivant
        </button>
      </div>
    </div>
  );
}

export default BookList;