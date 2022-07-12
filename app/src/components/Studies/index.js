import "./studies.css";

function Studies() {
    return(
        <div className="main-studies">
            <h2>ESTUDIOS</h2>
            <h4>Universidad Tecnológica Nacional- Facultad Regional Buenos Aires</h4>
            <h5>Diplomatura en Programación Web Full Stack</h5>
            <h6>Programador Web Inicial - Front End Developer</h6>
            <h7>Agosto 2021 - Diciembre 2021</h7>
            <p>
                En este curso inicial aprendí sobre maquetación web con HTML5 y CSS3,
                 Responsive Design, las bases de programación con Javascript,
                  sus usos en el servidor con node.js y el uso de bases de datos relacionales como MySQL.
            </p>
            <h6>Programador Web Avanzado - Full Stack Developer</h6>
            <h7>Marzo 2022 - Julio 2022</h7>
            <p>
            En este segundo curso que completa la diplomatura, aprendí sobre desarrollo de servidores con node.js
            , uso de APIs, bases de datos no relacionales, JWT, manejo de versiones con GIT. 
            En el proyecto final, hice uso de React.js para crear un sitio web que traiga información desde una API externa 
            y usara un servidor (Node.js + Express) como servicio.
            </p>
        </div>
    )
}

export default Studies;