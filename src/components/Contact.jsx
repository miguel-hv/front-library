import portrait from "../assets/CV_recorte.png";

const Contact = () => {

    return (
        <div>
            <h2>Sobre mí</h2>
            <div>
                <div>
                    <div className="w-1/2 m-auto">
                        <img className="w-full" src={portrait} alt="Mi retrato"/>
                    </div>
                    <div>                    
                        <h1 class="c-header-main__name">
                            Miguel Huerta de la Vega
                        </h1>
                        <h2 class="c-header-main__job-title">
                            Desarrollador Full Stack
                        </h2>
                    </div>
                </div>
                <p>
                    Tengo un 1 de experiencia como Desarrollador web Fullstack y más de 3 trabajando como Ingeniero Eléctrico y Electrónico el sector I+D, donde desarrollé una alta capacidad de adaptación con un enfoque hacia la resolución de problemas a través de la creatividad.
                </p>
                <p>
                    Prefiero trabajar en equipo y me encanta la música y el chocolate negro 😌
                </p>
                <div>

                </div>
            </div>
        </div>
    );
}    
 
export default Contact;