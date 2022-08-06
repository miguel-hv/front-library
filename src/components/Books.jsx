import { useBooks } from "../api/useBooks";
import BookCard from "./BookCard";


const Books = () => {

    const { booksList } = useBooks();

    if (booksList.length) {
        //TODO: BookCard en el div dentro del map
        return (
            <div> 
               { booksList.map(e => (
                    <BookCard
                        key={e._id}
                        name={e.name} 
                        author={e.author}
                        comment={e.comment}
                        signature={e.signature}                             
                    />
                ))
               }
            </div>
        );
    } else {
        <p>No hay libros</p>
    }
}

export default Books;