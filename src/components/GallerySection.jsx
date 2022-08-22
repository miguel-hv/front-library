import Books from "./Books";


const GallerySection = (props) => {
    
    return (
        <div className="bg-gray-100 rounded-lg p-4 m-8 overflow-y-scroll">
            {props.children}
        </div>
    );
}    
 
export default GallerySection;