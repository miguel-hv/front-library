const axios = require('axios').default;
// const BASE_URL = "http://localhost:3001";
const BASE_URL = "https://recruiting-books.vercel.app";

export const BooksService = {

    getBooks: async () => {
        try{
            return await axios.get(BASE_URL+'/books');
        } catch(error) {
            throw error;
        };
    },
    postBook: async (book) => {
        try {
            return await axios.post(BASE_URL+'/book', book);
        } catch (error) {
            throw error;
        };
    }
        
}