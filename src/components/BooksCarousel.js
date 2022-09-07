import React from 'react';
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

class BooksCarousel extends React.Component {
    render() {
        return (
            <Carousel>
                {this.props.books.map((item) => {
                    return (
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <p>{item.status}</p>
                                <Button
                                    variant="light"
                                    onClick={() => this.props.deleteBook(item._id)}
                                >
                                    Delete Book
                                </Button>
                                <Button
                                    variant="light"
                                    onClick={() => this.props.handleShowUpdateModal(item)}
                                >
                                    Update Book
                                </Button>
                            </Carousel.Caption>
                        </Carousel.Item>
                    );
                }
                )
                }
            </Carousel>
        )
    }
}

export default BooksCarousel;