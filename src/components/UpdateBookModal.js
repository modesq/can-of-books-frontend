import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

class UpdateModal extends React.Component {

    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.handleCloseUpdate}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Book</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={this.props.updateBook}>
                        <Form.Group className="mb-3">
                            <Form.Label>Book Title</Form.Label>
                            <Form.Control
                                type="text"
                                name="title"
                                placeholder="Enter a book name"
                                defaultValue={this.props.currentBooks.title}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Book Description</Form.Label>
                            <Form.Control
                                type="text"
                                name="description"
                                placeholder="Enter a description"
                                defaultValue={this.props.currentBooks.description}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Status</Form.Label>
                            <Form.Select id="status" defaultValue={this.props.currentBooks.status}>
                                <option>Book Status</option>
                                <option value="available">available</option>
                                <option value="low stock">low stock</option>
                                <option value="out of stock">out of stock</option>
                            </Form.Select>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Update Book
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.handleCloseUpdate}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default UpdateModal;