import { useGetBooks } from "../hooks/useBooks";


const Books = () => {

    const { booksList } = useGetBooks();

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