import Books from "./Books";


const GallerySection = () => {

    return (
        <div className="p-4 bg-red-600 m-8 max-h-screen overflow-y-scroll">
            <Books/>
        </div>
    );
}    
 
export default GallerySection;