
const InfoSection = ({children}) => {

    return (
        <div className="bg-gray-100 rounded-lg m-8 overflow-y-scroll flex flex-col">   
            {children[0]}
            <div className='flex-1 mx-5 my-6 flex flex-col justify-center'>
                {children[1]}
            </div>                    
        </div>
    );
}    
 
export default InfoSection;