import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

function Calculator() {
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [addition, setAddition] = useState(0);
  const [subtraction, setSubtraction] = useState(0);
  const [multiplication, setMultiplication] = useState(0);
  const [division, setDivision] = useState(0);

  function handleChange(event) {
    const { name, value } = event.target;

    if (name === "input1") {
      setInput1(value);
      const num1 = Number(value);
      const num2 = Number(input2);
      setAddition(num1 + num2);
      setSubtraction(num1 - num2);
      setMultiplication(num1 * num2);
      setDivision(num1 / num2);
    } else if (name === "input2") {
      setInput2(value);
      const num1 = Number(input1);
      const num2 = Number(value);
      setAddition(num1 + num2);
      setSubtraction(num1 - num2);
      setMultiplication(num1 * num2);
      setDivision(num1 / num2);
    }
  }

  return (
    <Container className="calculator">
      <h1>Simple Calculator</h1>
      <Row className="inputs">
        <Col>
          <Form.Label htmlFor="input1">Input 1:</Form.Label>
          <Form.Control
            type="number"
            id="input1"
            name="input1"
            value={input1}
            onChange={handleChange}
          />
        </Col>
        <Col>
          <Form.Label htmlFor="input2">Input 2:</Form.Label>
          <Form.Control
            type="number"
            id="input2"
            name="input2"
            value={input2}
            onChange={handleChange}
          />
        </Col>
      </Row>
      <Row className="results">
        <Col>
          <p>Addition: {addition}</p>
          <p>Subtraction: {subtraction}</p>
          <p>Multiplication: {multiplication}</p>
          <p>Division: {division}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Calculator;
