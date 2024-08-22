import { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { bookListProps, bookListArrayProps } from "../types";

type AddBookProps = {
  bookListState: bookListArrayProps;
  setBookListState: React.SetStateAction<bookListArrayProps>;
};

export default function AddBook({
  bookListState,
  setBookListState,
}: AddBookProps) {
  const [title, setTitle] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<number>(0);

  function handleSubmit(e: React.FormEventHandler<HTMLFormElement>) {
    console.log("did it even go here");
    e.preventDefault();
    const currentBookObject = new Object();
    currentBookObject.title = title;
    currentBookObject.category = category;
    currentBookObject.description = description;
    currentBookObject.price = price;
    console.log(
      `from add book.before pushing add: ${JSON.stringify(bookListState)}`
    );
    setBookListState([...bookListState, currentBookObject]);
    console.log(
      `from add book.after pushing add: ${JSON.stringify(bookListState)}`
    );
  }

  return (
    <Popup trigger={<button> Add Book</button>} position="right center">
      <form className="m-3">
        <div className="mb-3 ">
          <label for="title" className="form-label">
            Title:
          </label>
          <input
            className="form-control"
            id="title"
            aria-describedby="title"
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          <div className="form-text">Insert Book title</div>
        </div>

        <div className="mb-3">
          <label for="category" className="form-label">
            Category:
          </label>
          <input
            className="form-control"
            id="category"
            aria-describedby="category"
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          ></input>
          <div className="form-text">Insert Book category</div>
        </div>

        <div className="mb-3">
          <label for="description" className="form-label">
            Description:
          </label>
          <input
            className="form-control"
            id="description"
            aria-describedby="description"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></input>
          <div className="form-text">Insert Book Description</div>
        </div>

        <div className="mb-3">
          <label for="price" className="form-label">
            Price:
          </label>
          <input
            className="form-control"
            id="description"
            aria-describedby="description"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          ></input>
          <div className="form-text">Insert Book Price</div>
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Submit
        </button>
      </form>
    </Popup>
  );
}
