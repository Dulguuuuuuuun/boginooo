import React from 'react'
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "../styles/Forgot.css"
import Footer from '../components/Footer';
import Button from "react-bootstrap/Button";

function Forgot() {
  return (
    <div>
      <header>
        <h2>Хэрхэн ажилладаж вэ?</h2>
      </header>
      <main>
        <img src={require("../assets/boginooLogo.png")} alt="" />
        <h2>Нууц үг сэргээх</h2>
        <span>Бид таны цахим хаяг руу нууц үг сэргээх хаяг явуулах болно.</span>
        <div>
          <label className="labelUm">Цахим хаяг</label>
          <InputGroup className="mb-3,">
            <Form.Control
              style={{ width: 400, borderRadius: 20 }}
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              placeholder="name@mail.domain"
            />
          </InputGroup>
        </div>
        <Button variant="success">Илгээх</Button>{" "}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Forgot