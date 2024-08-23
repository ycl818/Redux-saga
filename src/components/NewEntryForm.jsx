import React, { useState } from "react";
import { Form, FormInput } from "semantic-ui-react";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";

const NewEntryForm = ({ addEntry }) => {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  return (
    <Form unstackable>
      <Form.Group>
        <FormInput
          width={12}
          icon="tags"
          label="Description"
          placeholder="New shinny thing"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <FormInput
          width={4}
          icon="dollar"
          iconPosition="left"
          label="Value"
          placeholder="100.00"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </Form.Group>
      <ButtonSaveOrCancel
        addEntry={addEntry}
        description={description}
        value={value}
      />
    </Form>
  );
};

export default NewEntryForm;
