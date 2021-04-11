/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import Card from "react-bootstrap/Card";
import { SelLocContext } from "../contexts";

const LocCard = ({loc}) => {
  let {name, address, distance, available} = loc;
  return(
    <SelLocContext.Consumer>
      {({selloc, setSelLoc}) => (
        <Card
          role="button"
          onClick={() => setSelLoc(loc)}
          className="loccard">
          <div>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{address}&mdash;{distance}</Card.Text>
          </div>
          <div
            className="avail-marker"
            data-status={available}
            title={available ? "available" : "unavailable"}
          />
        </Card>
      )}
    </SelLocContext.Consumer>
  );
};
LocCard.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  distance: PropTypes.string.isRequired,
  available: PropTypes.bool.isRequired
};

export default LocCard;
