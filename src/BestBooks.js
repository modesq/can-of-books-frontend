import React from "react";
import axios from "axios";
import BooksCarousel from "./components/BooksCarousel";
import BookFormModal from "./components/BookFormModal";
import Button from "react-bootstrap/Button";


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  componentDidMount = () => {
    axios
      .get("http://localhost:3000/getBooks")
      .then((result) => {
        this.setState({
          books: result.data,
        });
        // console.log(this.state.books);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleShow = () => {
    this.setState({
      show: true,
    });
  };

  handleClose = () => {
    this.setState({
      show: false,
    });
  };

  addBook = (event) => {
    event.preventDefault();

    const obj = {
      title: event.target.title.value,
      description: event.target.description.value,
      status: event.target.status.value
    };

    console.log(obj);
    axios
      .post(`http://localhost:3000/addBooks`, obj)
      .then((result) => {
        return this.setState({
          books: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
      
    this.handleClose();
  };

  deleteBook = (id) => {
    axios
      .delete(`http://localhost:3000/deleteBooks/${id}`)
      .then((result) => {
        this.setState({
          books: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {

    /* TODO: render all the books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        <Button
          variant="outline-secondary"
          size="lg"
          onClick={this.handleShow}
        >
          Add Book
        </Button>
        <BookFormModal
          show={this.state.show}
          handleClose={this.handleClose}
          addBook={this.addBook}
          handleOnChange={this.handleOnChange}
        />
        {
          this.state.books.length ? (
            <BooksCarousel
              books={this.state.books}
              deleteBook={this.deleteBook}
            />
          ) : (
            <h3>No Books Found :(</h3>
          )
        }
      </>
    )
  }
}

export default BestBooks;
