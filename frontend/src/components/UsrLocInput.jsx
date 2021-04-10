import React from "react";
import { UsrLocContext } from "../contexts";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";


const UsrLocInput = () => {

  return(
    <UsrLocContext.Consumer>
      {({setUsrloc}) => (
        <InputGroup size="sm">
            <FormControl
              onInput={(v) => setUsrloc({zipcode: v})}
              placeholder="Zip Code"
              aria-label="Zip Code"
            />
            <InputGroup.Append>
              <Button
                onClick={() => setUsrloc(/*TODO: device location*/)}
                variant="outline-secondary"
              >Device Location</Button>
            </InputGroup.Append>
          </InputGroup>
      )}
    </UsrLocContext.Consumer>
  );
};

export default UsrLocInput;
