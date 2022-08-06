import BookForm from "./BookForm"


const InfoSection = () => {

    return (
        <div className="p-4 bg-green-600 m-8 max-h-screen overflow-y-scroll flex flex-col justify-center">
            <BookForm/>
        </div>
    );
}    
 
export default InfoSection;