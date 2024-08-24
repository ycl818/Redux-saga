import React from "react";
import { Checkbox, Form, FormInput, Segment } from "semantic-ui-react";

const EntryForm = ({
  description,
  setDescription,
  value,
  setValue,
  isExpense,
  setIsExpense,
}) => {
  return (
    <>
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

      <Segment compact>
        <Checkbox
          toggle
          label="is expense"
          checked={isExpense}
          onChange={() => setIsExpense((oldState) => !oldState)}
        />
      </Segment>
    </>
  );
};

export default EntryForm;
