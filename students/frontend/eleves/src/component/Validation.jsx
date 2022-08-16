import React from 'react'
import { useNavigate } from 'react-router-dom'

function Validation() {
    const navigate = useNavigate();
  return (
    <div>
        <h1>Bonjour vous avez bien valider vous information</h1>
        <button onClick={() => navigate("/")}>back Home</button>
    </div>
  )
}

export default Validation