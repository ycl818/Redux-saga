import React, { useState } from "react";
import { Form } from "semantic-ui-react";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";
import EntryForm from "./EntryForm";

const NewEntryForm = ({ addEntry }) => {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [isExpense, setIsExpense] = useState(true);
  return (
    <Form unstackable>
      <EntryForm
        description={description}
        setDescription={setDescription}
        isExpense={isExpense}
        setIsExpense={setIsExpense}
        value={value}
        setValue={setValue}
      />

      <ButtonSaveOrCancel
        addEntry={addEntry}
        description={description}
        value={value}
        isExpense={isExpense}
      />
    </Form>
  );
};

export default NewEntryForm;
