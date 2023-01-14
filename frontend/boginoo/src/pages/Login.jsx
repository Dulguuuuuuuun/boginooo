import React from "react";
import { instance } from "../App";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "../styles/Login.css";
import Footer from "../components/Footer";


function Login() {
  return (
    <div>
      <header>
        <h2>Хэрхэн ажилладаж вэ?</h2>
      </header>
      <main>
        <img src={require("../assets/boginooLogo.png")} alt="" />
        <h1 style={{ color: "#02B589" }}>Нэвтрэх</h1>
        <div className="inputBox">
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
          <div>
            <label className="labelUm">Нууц үг</label>
            <InputGroup className="mb-3,">
              <Form.Control
                style={{ width: 400, borderRadius: 20 }}
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                placeholder="••••••••••"
              />
            </InputGroup>
            <div className="forgot">
              <Form>
                <Form.Check
                  style={{ color: "#02B589" }}
                  label={`Намайг сана`}
                />
              </Form>
              <Link to={"/forgot"}>
                <span>Нууц үгээ мартсан</span>
              </Link>
              
            </div>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Login;
