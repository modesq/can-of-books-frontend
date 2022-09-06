import React from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

class BookFormModal extends React.Component {
    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>New Book</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={this.props.addBook}>
                        <Form.Group className="mb-3">
                            <Form.Label>Book Title</Form.Label>
                            <Form.Control
                                type="text"
                                name="title"
                                placeholder="Enter a book name"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Book Description</Form.Label>
                            <Form.Control
                                type="text"
                                name="description"
                                placeholder="Enter a description"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Status</Form.Label>
                            <Form.Select id="status">
                                <option>Book Status</option>
                                <option value="available">available</option>
                                <option value="low stock">low stock</option>
                                <option value="out of stock">out of stock</option>
                            </Form.Select>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Add Book
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default BookFormModal;