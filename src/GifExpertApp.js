import React, { useState } from 'react'
import { AddCategoria } from './components/AddCategoria'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {
    const [categorias, setcategorias] = useState(['Robotech'])
    return (
        <div>
            <h2>Cargar Gifs Developer jchafloque</h2>
            <AddCategoria setCategorias={setcategorias} />
            <hr></hr>
            <ol>
                {
                    categorias.map(categoria =>
                        <GifGrid
                            key={categoria}
                            categoria={categoria} />
                    )
                }
            </ol>
        </div>
    )
}
