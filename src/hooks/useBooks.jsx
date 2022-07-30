import { useEffect, useState } from "react";
const axios = require('axios').default;
const BASE_URL = "http://localhost:3001";

export const useGetBooks = () => {

    const [booksList, setBooksList] = useState([]);

    useEffect(() => {
        axios.get(BASE_URL+'/books')
        .then( res => {
            setBooksList(res.data)
        })
        .catch( err => console.log(err));
    }, []);

    return { booksList };
}

export const usePostBooks = () => {

        const callApi = (book) => {
            axios.post(BASE_URL+'/book', book)
            .then( res => {
                console.log(res);
            })
            .catch( err => console.log(err));
        }

        // useEffect(() => {
        //     console.log("ejecuta useEffect");
        //     axios.post(BASE_URL+'/book', book)
        //     .then( res => {
        //         console.log(res);
        //     })
        //     .catch( err => console.log(err));
        // });
    

        return callApi

}
