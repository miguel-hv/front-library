

const Tabs = ({ onChangeTab, tab }) => {

    const activateScreen = (e) => {
        console.log(`pantalla ${e.currentTarget.id} activada`);
        console.log(e);
        onChangeTab(e.currentTarget.id);
    }

    const formTabBgColor = tab === 'form' ? 'bg-pink-600 ': 'bg-none';
    const aboutTabBgColor = tab === 'about' ? 'bg-pink-600 ': 'bg-none';
    const contactTabBgColor = tab === 'contact' ? 'bg-pink-600 ': 'bg-none';

    return (
        <div className="flex justify-evenly w-full absolute top-0">
            <button onClick={activateScreen} id="form" className={formTabBgColor}> Publicar </button>
            <button onClick={activateScreen} id="about" className={aboutTabBgColor}> Acerca de </button> 
            <button onClick={activateScreen} id="contact" className={contactTabBgColor}> Contacto </button>
        </div>
    );
}    
 
export default Tabs;