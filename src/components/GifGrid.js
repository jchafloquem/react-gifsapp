import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ categoria }) => {
    const { data, loading } = useFetchGifs(categoria);
    return (
        <>
            <h3>{categoria}</h3>
            {loading && <p>Cargando.....espere por favor</p>}
            <div className="card-grid">
                {
                    data.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )
}
