

const Tabs = ({ onChangeTab, tab }) => {

    const activateScreen = (e) => {
        onChangeTab(e.currentTarget.id);
    }

    const formTabBgStyles = tab === 'form' ? 'bg-none text-blue-700': 'bg-blue-700';
    const aboutTabBgStyles = tab === 'about' ? 'bg-none text-blue-700': 'bg-blue-700';
    const contactTabBgStyles = tab === 'contact' ? 'bg-none text-blue-700': 'bg-blue-700';    
    const tabStyles = "m-0 px-3 border border-gray-600 rounded-t py-6 font-medium text-white hover:bg-blue-800";

    return (
        <div className="flex flex-col sm:flex-row w-full border-b border-gray-600 bg-blue-200">
            <button onClick={activateScreen} id="form" className={[formTabBgStyles, tabStyles].join(' ')}>
                 Publicar 
            </button>
            <button onClick={activateScreen} id="about" className={[aboutTabBgStyles, tabStyles].join(' ')}> 
                Sobre este proyecto
            </button> 
            <button onClick={activateScreen} id="contact" className={[contactTabBgStyles, tabStyles].join(' ')}>
                Sobre mí
            </button>
        </div>
    );
}    
 
export default Tabs;