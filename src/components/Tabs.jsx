

const Tabs = ({ onChangeTab }) => {

    const activateScreen = (e) => {
        console.log(`pantalla ${e.currentTarget.id} activada`);
        console.log(e);
        onChangeTab(e.currentTarget.id);
    }

    return (
        <div>
            <button onClick={activateScreen} id="form"> Publicar </button>
            <button onClick={activateScreen} id="about"> Acerca de </button> 
            <button onClick={activateScreen} id="contact"> Contacto </button>
        </div>
    );
}    
 
export default Tabs;