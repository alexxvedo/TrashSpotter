import React from 'react';



const Foto = () => {
    return (
        <div className='foto'>
            <h2>Subir Fotografía</h2>
            <input type="file" accept="image/*" capture="environment" />
        </div>
    )
}
export default Foto