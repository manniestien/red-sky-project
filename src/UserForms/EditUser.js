import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalTitle from "react-bootstrap/ModalTitle";
import Form from "react-bootstrap/Form";

const EditUserForm = (props) => {
  const [user, setUser] = useState(props.currentUser);

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.updateUser(user.id, user);
  };
  return (
    <Modal aria-labelledby="contained-modal-title-vcenter" centered show={true}>
      <ModalHeader style={{ backgroundColor: "#DD013F", color: "white" }}>
        <ModalTitle className="editModal">EDIT USER</ModalTitle>
      </ModalHeader>
      <ModalBody>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledTextInput">FIRST NAME</Form.Label>
            <Form.Control
              name="first_name"
              defaultValue={user.first_name}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledTextInput">LAST NAME</Form.Label>
            <Form.Control
              name="last_name"
              defaultValue={user.last_name}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledTextInput">EMAIL ADDRESS</Form.Label>
            <Form.Control
              name="email"
              defaultValue={user.email}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledTextInput">
              AVATAR IMAGE LINK
            </Form.Label>
            <Form.Control
              name="avatar"
              defaultValue={user.avatar}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group style={{ float: "right" }} className="mb-3">
            <button
              style={{ marginRight: "13px", fontSize: "16px" }}
              onClick={() => props.setEditing(false)}
              className="btn btn-outline-danger"
            >
              CANCEL
            </button>
            <button
              className="btn"
              style={{ backgroundColor: "#DD013F", color: "white" }}
              type="submit"
              onClick={handleSubmit}
            >
              SAVE
            </button>
          </Form.Group>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default EditUserForm;
