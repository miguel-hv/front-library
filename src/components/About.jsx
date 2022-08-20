

const About = () => {

    return (
        <div>
            {/* <h2>Sobre este proyecto</h2> */}
                <h3 className="text-xl mb-2">¿Qué te ha parecido esta aplicación? 👀</h3>
            <div className="text-sm">
                <p className="mb-2">
                    Este proyecto es una pequeña demostración con React para el front, Node para el back y Tailwind para la maquetación CSS. No me he basado en ningún otro proyecto de ejemplo.
                </p>
                <p className="mb-2">
                    Si tienes conocimientos técnicos <a className="text-blue-900 font-bold" href="https://github.com/miguel-hv/front-library">te invito a echar un ojo al código</a>, verás que está bien estructurado y ordenado: principios SOLID, lógica separada de componentes, composición, peticiones API a través de un servicio, custom hook para el GET, etc.
                </p>
                
                <p className="mb-2">
                    <a className="text-blue-900 font-bold" href="https://www.linkedin.com/in/hvmiguel/">Cuéntame qué te ha parecido la web</a>, ya sea en cuanto a interfaz, experiencia de uso o aspectos técnicos.
                </p>  
                 <p>
                    ¡Muchas gracias por la visita y por compartir conmigo tu libro favorito! 😁
                </p>
            </div>
        </div>
    );
}    
 
export default About;