
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';


const baseURL = "https://api.thecatapi.com/v1/categories"

function App() {
  const [cat, setCat] = useState([]);
  const [name, setName] = useState("")

  useEffect(() => {
    axios.get(`${baseURL}/5`).then((response) => { setCat(response.data) }
    )
      .catch((err) => { console.log("ocorreu um erro!" + err) });
  })

  function updatePost(e) {
    e.preventDefault();
    axios.put(`${baseURL}/1`, {
      name: name
    })
      .then((res) => { setCat(res.data) })
  }



  return (
    <div className="App">
      <h1>Cats API</h1>
      <h2>GET</h2>
      <ul>
        <li><p>ID: {cat?.id}</p></li>
        <li><p>Nome: {cat?.name}</p></li>
      </ul>
      <h2>POST</h2>
      <form onSubmit={updatePost}>
        <p>Nome:</p><input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)} />
        <input type="submit" value="criar"></input>
      </form>
    </div>
  );
}

export default App;
