

const Tabs = ({ onChangeTab, tab }) => {

    const activateScreen = (e) => {
        console.log(`pantalla ${e.currentTarget.id} activada`);
        console.log(e);
        onChangeTab(e.currentTarget.id);
    }

    const formTabBgStyles = tab === 'form' ? 'bg-pink-600 ': 'bg-none';
    const aboutTabBgStyles = tab === 'about' ? 'bg-pink-600 ': 'bg-none';
    const contactTabBgStyles = tab === 'contact' ? 'bg-pink-600 ': 'bg-none';    
    const tabStyles = "m-0 px-3 border border-gray-600 rounded-t";

    // margin: 0;
    // padding: 0 15px;
    // border: 1px solid #272311;
    // border-bottom: 1px solid #868686;
    // border-top-left-radius: 5px;
    // border-top-right-radius: 5px;
    // height: 35px;
    // position: relative;
    // top: 5px;
    // display: inline-block;
    // border-bottom: 2px solid #333;
    return (
        <div className="flex justify-evenly w-full absolute top-0">
            <button onClick={activateScreen} id="form" className={[formTabBgStyles, tabStyles].join(' ')}> Publicar </button>
            <button onClick={activateScreen} id="about" className={[aboutTabBgStyles, tabStyles].join(' ')}> Acerca de </button> 
            <button onClick={activateScreen} id="contact" className={[contactTabBgStyles, tabStyles].join(' ')}> Contacto </button>
        </div>
    );
}    
 
export default Tabs;