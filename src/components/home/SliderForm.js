import React from "react";
import { Form, InputGroup, FormControl } from "react-bootstrap";
import { FiMapPin } from "react-icons/fi";

const SliderForm = () => {
  return (
    <Form>
      <Form.Select size="lg" className="mb-3">
        <option>Select a car</option>
      </Form.Select>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">
          <FiMapPin /> Pick up
        </InputGroup.Text>
        <FormControl placeholder="Type a place" />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">
          <FiMapPin /> Drop off
        </InputGroup.Text>
        <FormControl placeholder="Type a place" />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">
          <FiCalendar /> Pick up
        </InputGroup.Text>
        <FormControl type="date" />
        <FormControl type="time" />
      </InputGroup>
    </Form>
  );
};

export default SliderForm;
