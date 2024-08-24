import React from "react";
import { Button, Modal } from "semantic-ui-react";
import NewEntryForm from "./NewEntryForm";

const ModalEdit = ({ isOpen, setIsOpen }) => {
  return (
    <Modal open={isOpen}>
      <Modal.Header>Edit entry</Modal.Header>
      <Modal.Content>
        <Modal.Description>Modal content</Modal.Description>
        <NewEntryForm />
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setIsOpen(false)}>Close</Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ModalEdit;
