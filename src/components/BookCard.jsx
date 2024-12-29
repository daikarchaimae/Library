import React from "react";

function BookCard({ book }) {
  return (
    <div className="book"
      style={{
        border: "1px solid #ddd",
        padding: "10px",
        width: "200px",
        textAlign: "center",
      }}
    >
      <img src={book.img} alt={book.title} style={{ width: "20%" }} />
      <h3 style={{ fontSize: "1.1em", margin: "10px 0" }}>{book.title}</h3>
      <p style={{ margin: "0" }}>Auteur : {book.author}</p>
      <p style={{ margin: "0" }}>Année : {book.year}</p>
      <p style={{ margin: "0" }}>Genre : {book.genre}</p>
      <p style={{ margin: "10px 0", fontWeight: "bold" }}>
        Note : {book.rating}
      </p>
    </div>
  );
}

export default BookCard;