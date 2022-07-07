import React from 'react';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function BasicSwitches() {
  return (
    <div>
      <Switch {...label} defaultChecked />
    </div>
  );
}

//const changeLanguage = ()=>{

//  const [lenguage, setLenguage] = useState("es")

//  const change = ()=> {
//      setLenguage(lenguage = "en")
//  }

//  return { lenguage, change }

//};