import React from 'react';
import PropTypes from 'prop-types';
import Card from "react-bootstrap/Card";

const LocCard = ({name, address, distance, available}) => {
  render(
    <Card role="button" className="loccard">
      <Card.Title>{name}</Card.Title>
      <Card.Text>{address}&mdash;{distance}</Card.Text>
      <div className="avail-marker" data-status={available} title={available ? "available" : "unavailable"} />
    </Card>
  );
};
LocCard.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  distance: PropTypes.string.isRequired,
  available: PropTypes.bool.isRequired
};

export default LocCard;
