import React from "react";
import { instance } from "../App";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import "../styles/Login.css";
import Footer from "../components/Footer";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const login = async () => {
    try {
      const res = await instance.post("/user/login", {
        email: email,
        password: password,
      });
      console.log(res);
      window.location.replace(`/user/${res.data.data._id}`);
      console.log(res)
      window.localStorage.setItem("token", JSON.stringify(res.data.token));
      toast.success("amjilttai nevterle");
    } catch (error) {
      toast.error(error.message);
      console.log(error);
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
        <h1 style={{ color: "#02B589" }}></h1>
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
            <Link to={"/signup"}>
              <span>Шинэ хэрэглэгч бол энд дарна уу?</span>
            </Link>
          </div>
          <Button onClick={login} variant="success">
            Нэвтрэх{" "}
          </Button>{" "}
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Login;
