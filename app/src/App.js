import logo from './logo.svg';
import './App.css';

const name = "Ignacio Martinez"

function App() {
  return (
    <div className="App">
      <header>
        <h1>Ignacio Emilio Martinez</h1>
        <br />
        <h3>Desarrollador web Full Stack</h3>
      </header>

    <div class="grid-layout">
        <main>
            <h2>EXPERIENCIA</h2>
                <h4>Proyectos</h4>
                    <ul>
                        <li>www.mtzaccesorios.com</li>
                        <p>Página web de una distribuidora mayorista,
                            incluye funcionalidades como: base de datos de
                            clientes, generador de presupuestos y pedidos
                            online.
                        </p>
                        <li>www.oroñotuningcar.com</li>
                        <p>Página de comercio minorista, orientada a
                            publicitar el comercio y sus mercaderias.
                        </p>
                    </ul>
            <h2>ESTUDIOS</h2>
                <h4>Universidad Tecnológica Nacional
                Facultad Regional de Buenos Aires
                </h4>
                    <ul>
                        <li>Diplomatura en Programación Web Full Stack</li>
                    </ul>
            <h2>HABILIDADES</h2>
                <h4>Front end</h4>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                    </ul>
                <h4>Back end</h4>
                    <ul>
                        <li>Node</li>
                        <li>Express</li>
                    </ul>
                <h4>Bases de datos</h4>
                    <ul>
                        <li>MongoDB</li>
                        <li>MySQL</li>
                    </ul>
                <h4>Nivel de ingles: intermedio</h4>
        </main>

        <aside>
            <h2>CONTACTO</h2>
                <ul>
                    <li>teléfono: 3415509252</li>
                    <li>email: martinez_ignacio@outlook.com</li>
                </ul>
        </aside>
    </div>
    </div>
  );
}

export default App;
