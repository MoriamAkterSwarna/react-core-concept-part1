// Code For Video 38-9

import "./Book.css";
export default function Book({ book }) {
  const { name, price } = book;
  return (
    <div className="book">
      <h2>Book: {name} </h2>
      <p>Price: {price} </p>
    </div>
  );
}
