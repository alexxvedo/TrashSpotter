import React from 'react';
import Boton from './Boton';


export default function Main() {

    const titles = ["Reportar basura", "Subir fotografía", "Dar propina"];

    const botones = titles.map((titulo) => {
        return (<Boton title={titulo} />)
    })

    return (
        <div className="main">
            {botones}
        </div>
    )

}
