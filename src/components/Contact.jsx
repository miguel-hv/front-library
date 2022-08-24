import portrait from "../assets/CV_recorte.png";

const Contact = () => {

    return (
        <div>
            {/* <h2>Sobre mí</h2> */}
            <div>
                <div>
                    <div className="w-1/2 m-auto">
                        <img className="w-full mb-4" src={portrait} alt="Foto de perfil"/>
                    </div>
                    <div className="mb-4">                    
                        <h2 className="text-xl mb-2">
                            Miguel Huerta de la Vega
                        </h2>
                        <h3>
                            Desarrollador Full Stack
                        </h3>
                    </div>
                </div>
                <div className="text-sm">
                    <p className="mb-2">
                        Llevo trabajando como Desarrollador web Fullstack desde septiembre de 2021, donde empecé tras cursar un bootcamp y haber estado más de 3 trabajando como Ingeniero Eléctrico y Electrónico el sector I+D.                    
                    </p>
                    <p className="mb-2">
                        Por las características del trabajo en I+D desarrollé una alta capacidad de adaptación con un enfoque hacia la resolución de problemas a través de la creatividad.
                    </p>
                    <p className="mb-2">
                        Prefiero trabajar en equipo y me encanta la música y el chocolate negro 😌
                    </p>
                    <p>
                        Si quieres contactarme puedes hacerlo a través de <a className="text-blue-900 font-bold" href="https://www.linkedin.com/in/hvmiguel/">LINKEDIN</a> y para ver mi repositorio de proyectos te dejo mi <a className="text-blue-900 font-bold" href="https://github.com/miguel-hv/front-library">GITHUB</a>
                    </p>
                </div>
            </div>
        </div>
    );
}    
 
export default Contact;