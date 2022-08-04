import { useEffect, useState } from "react";
import { BooksService } from "./BooksService";

export const useBooks = () => {

    const [booksList, setBooksList] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        BooksService.getBooks()
        .then( res => {
            setBooksList(res.data)
        })
        .catch( err => {
            console.log(err);
            setError(err);
        });
    }, []);

    return { booksList, error };
}

