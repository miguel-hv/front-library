import { useBooks } from "../api/useBooks";


const Books = () => {

    const { booksList } = useBooks();

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