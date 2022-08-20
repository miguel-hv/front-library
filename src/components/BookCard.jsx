
const BookCard = ({ name, author, comment, signature }) => {

    let Name, Author, Comment, Signature;
    if(comment && comment.length){
        Comment = (            
            <p className="font-normal text-gray-700">
                {comment}
            </p>       
        );
    }
    if(signature && signature.length){
        Signature = (            
            <p className="font-normal text-gray-700 text-right">
                {signature}
            </p>       
        );
    }
    Name = (
        <h4 className="text-xl font-bold tracking-tight text-gray-900 ">
            { name }
        </h4> 
    );
    Author = (
        <h5 className="mb-2 tracking-tight text-gray-900 ">
            { author }
        </h5> 
    );

    return (
        <div className="block mb-4 p-6 bg-white rounded-lg border border-gray-200 shadow-md">
            { Name }            
            { Author }            
            { Comment }            
            { Signature }            
        </div>
    );
}    
 
export default BookCard;