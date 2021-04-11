import React, { useState } from "react";
import { UsrLocContext } from "../contexts";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";


const UsrLocInput = () => {
  const [Thing, setThing] = useState("");

  return(
    <UsrLocContext.Consumer>
      {({setUsrLoc}) => (
        <InputGroup size="sm">
            <FormControl
              onBlur={() => {
                if(!Thing.match(/\d{5}/)) {
                  return setUsrLoc({zipcode: Thing});
                }
              }}
              onInput={(v)=>setThing(v.target.value)}
              value={Thing}
              placeholder="Zip Code"
              aria-label="Zip Code"
            />
            <InputGroup.Append>
              <Button
                onClick={() => setUsrLoc(/*TODO: device location*/)}
                variant="outline-secondary"
              >Device Location</Button>
            </InputGroup.Append>
          </InputGroup>
      )}
    </UsrLocContext.Consumer>
  );
};

export default UsrLocInput;
