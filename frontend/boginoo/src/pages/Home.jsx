import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import "../styles/Home.css"
import { Link } from 'react-router-dom';
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useState,useRef } from 'react';
import {instance} from "../App";
import Footer from '../components/Footer';


function Home() {

  const [longLink, setLongLink] = useState();
  const [shortLink, setShortLink] = useState()
  const [url , setUrl] = useState();
  const [ data , setData] = useState();

  const getData = async () => {
    const res = await instance.post("/link", {
      url: longLink,
    }); 
    setShortLink(res.data.data.shortId);
    console.log(res)
  };      


  return (
    <div className="homeContainer">
      <header>
        <h2>Хэрхэн ажилладаж вэ?</h2>

        <Link to={"/login"}>
          <Button variant="success">Нэвтрэх</Button>{" "}
        </Link>
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
        <div className='hadgalagch'>
          <p>Өгөгдсөн холбоос:</p>
          <span>{longLink}</span>
          <p>Богино холбоос:</p>
          <span>localhost:3000/{shortLink}</span>
        </div>
      </main>

      <footer>
       <Footer/>
      </footer>
    </div>
  );
}

export default Home