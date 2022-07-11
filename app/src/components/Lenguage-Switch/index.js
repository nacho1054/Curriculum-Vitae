import React, {useState} from 'react';


export default changeLanguage = ()=>{

  const [lenguage, setLenguage] = useState(true)

  const change = ()=> {
      setLenguage(lenguage = !lenguage)
  }

  return { lenguage, change }

};