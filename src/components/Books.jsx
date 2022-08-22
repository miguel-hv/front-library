import BookCard from "./BookCard";


const Books = ({booksList}) => {

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
}

export default Books;