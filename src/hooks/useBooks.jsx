import { useEffect, useState } from "react";
const axios = require('axios').default;
const BASE_URL = "http://localhost:3001/books";

export const useGetBooks = () => {

    const [booksList, setBooksList] = useState([]);

    useEffect(() => {
        axios.get(BASE_URL)
        .then( res => {
            setBooksList(res.data)
        })
        .catch( err => console.log(err));
    }, []);

    return { booksList };
}
