import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

function SubscribeModal({ show, handleClose }) {

    let currentValue = "";

    function onInputChange(event) {
        currentValue = event.target.value;
        console.log(currentValue);
    }

    function subscribeToLocation() {
        console.log(`http://localhost:5000/api/twilio/send_message/?cellphone=${currentValue}`)

        fetch(`http://covid_tracker.fetchit.dev:5000/api/twilio/send_message/?cellphone=${currentValue}`)
        .then(response => response.text())
        .then(text => console.log(text));
    }

    return (
        <Modal show={show} handleClose={handleClose}>
          <Modal.Header closeButton>
          <Modal.Title>Subscribe to Updates</Modal.Title>
          </Modal.Header>

          <Modal.Body>
              <input onChange={onInputChange} placeholder="Enter Phone Number" />
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Close</Button>
            <Button variant="primary" type="submit" onClick={subscribeToLocation}>Save changes</Button>
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