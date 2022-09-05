import React from 'react';
import axios from 'axios';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  addBooks = (event) => {
    event.preventDefault();

    const obj = {
      title: event.target.title.value,
      description: event.target.description.value,
      status: event.target.status.value
    }

    axios
      .get(`http://localhost:3010/getBooks`, obj)
      .then(result => {
        this.setState({
          books: result.data
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {

    /* TODO: render all the books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
          // <p>Book Carousel coming soon</p>
          <div>
            <h1>book System</h1>
            {this.state.books.map(item => {
              return (
                <div>
                  <h3>book name : {item.title} </h3>
                  <p>book description : {item.description}</p>
                  <h4>book state : {item.state}</h4>
                </div>
              )
            })}
          </div>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;
