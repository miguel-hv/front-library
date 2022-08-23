

const About = () => {

    return (
        <div>
            {/* <h2>Sobre este proyecto</h2> */}
                <h2 className="text-xl mb-6 font-bold">¿Qué te ha parecido esta aplicación? 👀</h2>
            <div className="text-sm">
                <p className="mb-2">
                    Este proyecto es una pequeña demostración con React para el front, Tailwind para la maquetación CSS, Node para el back y Mongo para la base de datos. La web está adaptada para escritorio y móvil, aunque no está completamente optimizada.
                </p>
                <p className="mb-2">
                    Si tienes conocimientos técnicos <a className="text-blue-700 font-bold" href="https://github.com/miguel-hv/front-library">te invito a echar un ojo al código</a>, verás que está bien estructurado y ordenado: principios SOLID, lógica separada de componentes, composición, peticiones API a través de un servicio, custom hook para el GET, etc.
                </p>
                
                <p className="mb-2">
                    <a className="text-blue-700 font-bold" href="https://www.linkedin.com/in/hvmiguel/">Cuéntame qué te ha parecido la web</a>, ya sea en cuanto a interfaz, experiencia de uso o aspectos técnicos.
                </p>  
                 <p>
                    ¡Muchas gracias por la visita y por compartir conmigo tu libro favorito! 😁
                </p>
            </div>
        </div>
    );
}    
 
export default About;