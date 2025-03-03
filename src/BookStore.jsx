// Code For Video 38-9

import Book from "./Book";

export default function BookStore({ books }) {
  return (
    <div>
      <h2>Books: {books.length} </h2>

      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </div>
  );
}
