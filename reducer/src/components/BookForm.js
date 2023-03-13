import React, { useContext, useState } from "react";
import { BookContext } from "../context/BookContext";

const BookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const { dispatch } = useContext(BookContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_BOOK",
      payload: {
        title: title,
        author: author,
      },
    });
    setTitle("");
    setAuthor("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Book title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input type="submit" value="Add book" />
    </form>
  );
};

export default BookForm;
