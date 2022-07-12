import "./presentation.css";
import photo from "../../photos/photo6.jpeg";
import React from 'react';
import Switch from '@mui/material/Switch';
import { GB } from 'country-flag-icons/react/3x2'
import { ES } from 'country-flag-icons/react/3x2'


const label = { inputProps: { 'aria-label': 'Switch demo' } };

function Presentation() {
    return(
        <header className="main-header">
            <div className="profile">
                <img src={photo} className="photo"></img>
                <div className="main-info">
                    <h1 className="name">Ignacio Emilio Martinez</h1>
                    <h3 className="job">Desarrollador web Full Stack</h3>
                </div>
            </div>
            <div className="selector">
                <GB title="English" className="ukFlag"/>
                <Switch  {...label} defaultChecked className="switch"/>
                <ES title="Español" className="esFlag"/>
            </div>
            <div className="description">
                <p>
                Soy una persona con pasión por la tecnología que busca desempeñarse como desarrollador web. 
                Siempre abierto a aprender nuevos conocimientos y vivir experiencias que me ayuden a crecer profesionalmente. 
                Me considero alguien confiable, responsable y sincero, con buen trato hacia las personas y predispuesto para el trabajo en equipo.
                </p>
            </div>
            
        </header>
    )
}

export default Presentation;