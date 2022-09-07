import React from "react";
import axios from "axios";
import BooksCarousel from "./components/BooksCarousel";
import AddBookModal from "./components/AddBookModal";
import UpdateBookModal from "./components/UpdateBookModal";
import Button from "react-bootstrap/Button";


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      showFlag: false,
      books: [],
      currentBooks: {},
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

  updateBook = (event) => {
    event.preventDefault();
    let obj = {
      title: event.target.title.value,
      description: event.target.description.value,
      status: event.target.status.value
    }
    console.log(obj)
    const id = this.state.currentBooks._id;
    axios
      .put(`http://localhost:3000/updateBooks/${id}`, obj)
      .then(result => {
        this.setState({
          books: result.data
        })
      })
      .catch(err => {
        console.log(err);
      })
    this.handleCloseUpdateModal();
  }

  handleShowUpdateModal = (item) => {
    this.setState({
      showFlag: true,
      currentBooks: item,
    });
  };

  handleCloseUpdateModal = () => {
    this.setState({
      showFlag: false,
    });
  };

  render() {

    /* TODO: render all the books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        <Button variant="outline-secondary" size="lg" onClick={this.handleShow}> Add Book </Button>
        <AddBookModal
          show={this.state.show}
          handleClose={this.handleClose}
          addBook={this.addBook}
          handleOnChange={this.handleOnChange}
        />
        <UpdateBookModal
          show={this.state.showFlag}
          handleCloseUpdate={this.handleCloseUpdateModal}
          updateBook={this.updateBook}
          currentBooks={this.state.currentBooks}
        />
        {
          this.state.books.length ? (
            <>
              <BooksCarousel
                books={this.state.books}
                deleteBook={this.deleteBook}
                handleShowUpdateModal={this.handleShowUpdateModal}
              />
            </>
          ) : (
            <h3>No Books Found :(</h3>
          )
        }
      </>
    )
  }
}

export default BestBooks;
