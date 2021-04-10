import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

function SubscribeModal({ show, handleClose }) {
    return (
        <Modal show={show} handleClose={handleClose}>
          <Modal.Header closeButton>
          <Modal.Title>Subscribe to Updates</Modal.Title>
          </Modal.Header>

          <Modal.Body>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="text" placeholder="Enter phone number" />
          </Form.Group>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Close</Button>
            <Button variant="primary" type="submit">Save changes</Button>
          </Modal.Footer>
        </Modal>
    )
}

SubscribeModal.defaultProps = {
    show: false,
}

SubscribeModal.propTypes = {
    show: PropTypes.bool,
    handleClose: PropTypes.func,
}

export default SubscribeModal;