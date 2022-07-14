import { useEffect, useState } from 'react';
import './App.css';

const axios = require('axios').default;


const BASE_URL = "http://localhost:3001/books";

function App() {

  const [booksList, setBooksList] = useState([]);



  useEffect(() => {
    // fetch(BASE_URL)
    // .then(res => res.json())
    // .then( res => {
    //   setBooksList(res);
    //   console.log(res);
    // })
    // .catch(err => {console.log(err)});
    const getBooks = async () => {
      try {
        const res = await axios.get(BASE_URL);
        setBooksList(res.data);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    }
    getBooks();
  }, []);
  
  const Books = () => {
    if (booksList.length) {
      return (
          booksList.map(e => 
            <p key={e._id}>{e.author}</p>            
          )
        );
      } else {
        <p>No hay libros</p>
      }
  }

  return (
    <div className="App">
      RECRUITERS LIBRARY
      <Books/>
    </div>
  );
}

export default App;
