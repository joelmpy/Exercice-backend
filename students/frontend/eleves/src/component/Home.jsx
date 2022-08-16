import React from "react";
import { useState, useEffect} from 'react'
import '../App.css';
import Add from "./Add";

function Home() {
  const [user, setUsers] = useState([]);

  useEffect(() => {
    load();
  }, []);

  const load = () => {
    const url = "http://localhost:8005/students";
    fetch(url).then((reponse) =>
      reponse.json().then((data) => {
        setUsers(data);
      })
    );
  };

  return (
    <>
    <div className="section"> 
    <div className="section-left">
        <Add/>
    </div>
    <div className="section-right">
      <h2>Ici Home</h2>
      <p>
        {user.map((users) => {
          return <p>{users.first_name}</p>;
        })}
      </p>
    </div>

    </div>
    </>
  );
}

export default Home;
