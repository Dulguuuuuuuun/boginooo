import React from "react";
import Button from "react-bootstrap/Button";
import { instance } from "../App";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { useParams , Link  } from "react-router-dom";

function Logged() {
  const [longLink, setLongLink] = useState();
  const [shortLink, setShortLink] = useState();
  const [name, setName] = useState();
    const params = useParams();
  const getData = async () => {
    const res = await instance.post("/link", {
      url: longLink,
      user_id : params._id
    });
    setShortLink(res.data.data.shortId);
    console.log(res);
  };

  const getUser = async () => {
    const res = await instance.get(`/user/${params._id}`);
    setName(res.data.data.email);
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className="homeContainer">
      <header>
        <h2>Хэрхэн ажилладаж вэ?</h2>
        <Button variant="success">{name}</Button>{" "}
        <Link to="/" variant="success">Logout</Link>{" "}
      </header>

      <main>
        <img
          className="img"
          src={require("../assets/boginooLogo.png")}
          alt=""
        />
        <div className="input">
          <InputGroup className="mb-3,">
            <Form.Control
              style={{ width: 400, borderRadius: 20 }}
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              placeholder="https://www.web-huudas.mn"
              onChange={(e) => setLongLink(e.target.value)}
            />
          </InputGroup>
          <Button variant="success" onClick={getData}>
            Богиносгох
          </Button>{" "}
        </div>
        <div className="hadgalagch">
          <p>Өгөгдсөн холбоос:</p>
          <span>{longLink}</span>
          <p>Богино холбоос:</p>
          <span>localhost:3000/{shortLink}</span>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Logged;
