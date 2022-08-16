import React from "react";
import axios from 'axios'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'

function Add() {

    const [nameU, setName] = useState("");
    const [user, setUsers] = useState([]);

    const navigate = useNavigate();

    const nameUser = (event) => {
      setName(event.target.value);
    };
    
    const addNew = (e) => {
      e.preventDefault();
      axios
        .post("http://localhost:8005/students", {
          first_name: nameU,
        })
        .then((data) => {
          setUsers(data.data)
          navigate("/Validation", {replace : true})
        });
    };

  return (
    <div>
      <h1>Bonjour</h1>
      <input type="text" placeholder='name : "Joel' value={nameU}onChange={nameUser}/>
      <p>{nameU}</p>
      <button onClick={addNew}>envoyer</button>
    </div>
  );
}

export default Add;
