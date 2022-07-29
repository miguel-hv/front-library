import { useEffect, useState } from 'react';
const axios = require('axios').default;
const BASE_URL = "http://localhost:3001/books";

const Books = () => {


  const [booksList, setBooksList] = useState([]);

    const getBooks = async () => {
        try {
        const res = await axios.get(BASE_URL);
        setBooksList(res.data);
        console.log(res);
        } catch (err) {
        console.log(err);
        }
    }

    useEffect(() => {

    getBooks();
    }, []);


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

export default Books;