import { bookList } from "./BookList";
import { useState } from "react";
import BookRow from "./BookRow";
import { bookListProps, bookListArrayProps } from "../types";
import React from "react";

export default function BookTable() {
  const [bookListState, setBookListState] =
    useState<bookListArrayProps>(bookList);
  console.log(`from table: ${JSON.stringify(bookListState)}`);
  return (
    <>
      <div className="input-group mb-3">
        {/* input search bar */}

        <input
          type="text"
          className="form-control"
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        ></input>
        <span className="input-group-text" id="basic-addon2">
          search
        </span>
      </div>
      <div>
        have a book to add?
        <a href="#"> add here</a>
      </div>
      {/* book table */}
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Category</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
            <th scope="col"> </th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          <BookRow bookListState={bookListState} />
        </tbody>
      </table>
    </>
  );
}
