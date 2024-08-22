import React from "react";
import { bookListProps, bookListArrayProps } from "../types";

type AddBookProps = {
  bookListState: bookListArrayProps;
  setBookListState: React.SetStateAction<bookListArrayProps>;
};
export default function BookRow({
  bookListState,
  setBookListState,
}: AddBookProps) {
  //console.log(`from bookrow: ${JSON.stringify(bookListState)}`);
  function handleDelete(key: String) {
    const newBookList = bookListState.filter(
      (book: bookListProps) => book.title !== key
    );
    setBookListState(newBookList);
  }
  return (
    <>
      {bookListState.map((currentBook: object) => (
        <tr key={currentBook.title}>
          <td>{currentBook.title}</td>
          <td>{currentBook.category}</td>
          <td>{currentBook.description}</td>
          <td>${currentBook.price}</td>
          <td>
            <a href="#" onClick={() => handleDelete(currentBook.title)}>
              delete
            </a>
            <a> edit </a>
          </td>
        </tr>
      ))}
    </>
  );
}
