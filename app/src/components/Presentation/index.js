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
            <img src={photo} className="photo"></img>
            <div className="main-info">
                <h1 className="name">Ignacio Emilio Martinez</h1>
                <h3 className="job">Desarrollador web Full Stack</h3>
            </div>
            <div className="selector">
                <GB title="English" className="ukFlag"/>
                <Switch  {...label} defaultChecked className="switch"/>
                <ES title="Español" className="esFlag"/>
            </div>
            
        </header>
    )
}

export default Presentation;