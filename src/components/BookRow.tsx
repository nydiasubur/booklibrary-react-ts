import React from "react";
import { bookListProps, bookListArrayProps } from "../types";

export default function BookRow ({ bookListState<bookListArrayProps>}){
  console.log(`from bookrow: ${JSON.stringify(bookListState)}`);

  return (
    <>
      {bookListState.map((currentBook: object, index: number) => (
        <tr key={index}>
          <td>{currentBook.title}</td>
          <td>{currentBook.category}</td>
          <td>{currentBook.description}</td>
          <td>${currentBook.price}</td>
          <td>Delete | Edit</td>
        </tr>
      ))}
    </>
  );
}
