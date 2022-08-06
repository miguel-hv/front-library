
const BookCard = ({ name, author, comment, signature }) => {

    let Name, Author, Comment, Signature;
    if(comment && comment.length){
        Comment = (            
            <p className="font-normal text-gray-700 dark:text-gray-400">
                {comment}
            </p>       
        );
    }
    if(signature && signature.length){
        Signature = (            
            <p className="font-normal text-gray-700 dark:text-gray-400">
                {signature}
            </p>       
        );
    }
    Name = (
        <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            { name }
        </h4> 
    );
    Author = (
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            { author }
        </h5> 
    );

    return (
        <div className="block mb-4 p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            { Name }            
            { Author }            
            { Comment }            
            { Signature }            
        </div>
    );
}    
 
export default BookCard;