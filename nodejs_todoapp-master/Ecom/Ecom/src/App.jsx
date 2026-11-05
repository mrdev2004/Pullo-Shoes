import { useEffect, useState } from 'react'
import "../src/index.css"
import './App.css'
import axios from "axios";
import AboutUs from './Components/AboutUs';
function App() {
  const [message, setMessage] = useState("")
  useEffect(() => {
    axios.get('http://localhost:5000/hello')
      .then(response => {
        console.log("response", response)
        setMessage(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <>

    </>
  )
}

export default App
