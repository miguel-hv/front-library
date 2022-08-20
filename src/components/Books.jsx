import BookCard from "./BookCard";


const Books = ({booksList}) => {

    if (booksList && booksList.length > 0) {
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
        return (
            <p>No hemos encontrado ningún libro</p>
        );
    }
}

export default Books;