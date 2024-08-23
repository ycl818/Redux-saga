import React from "react";
import { Button } from "semantic-ui-react";

const ButtonSaveOrCancel = ({ addEntry, description, value }) => {
  return (
    <Button.Group style={{ marginTop: 20 }}>
      <Button>Cancel</Button>
      <Button.Or>
        <Button primary onClick={() => addEntry(description, value)}>
          OK
        </Button>
      </Button.Or>
    </Button.Group>
  );
};

export default ButtonSaveOrCancel;
