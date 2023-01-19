import React from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Footer from "../components/Footer";
import { instance } from "../App";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignUp() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const createUser = async () => {
    try {
        await instance.post("/user/signup", {
        email: email,
        password: password,
      });
      toast.success("amjilttai")
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div>
      <ToastContainer />
      <header>
        <h2>Хэрхэн ажилладаж вэ?</h2>
      </header>
      <main>
        <img src={require("../assets/boginooLogo.png")} alt="" />
        <h1 style={{ color: "#02B589" }}>Бүртгүүлэх</h1>
        <div className="inputBox">
          <div>
            <label className="labelUm">Цахим хаяг</label>
            <InputGroup className="mb-3,">
              <Form.Control
                style={{ width: 400, borderRadius: 20 }}
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                placeholder="name@mail.domain"
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
              />
            </InputGroup>
          </div>
          <div>
            <label className="labelUm">Нууц үгээ давтна уу?</label>
            <InputGroup className="mb-3,">
              <Form.Control
                style={{ width: 400, borderRadius: 20 }}
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                placeholder="••••••••••"
                onChange={(e) => setPassword(e.target.value)}
              />
            </InputGroup>
          </div>
          <Button onClick={createUser} variant="success">Бүртгүүлэх </Button>{" "}
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default SignUp;
