import React from 'react';
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    const { data, loading } = useFetchGifs( category );

    console.log(data);

    return (
        <div>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            { loading && <p className="animate__animated animate__flash">Loading...</p> }
            <ol className="card-grid">{ data.map(img => {

                return <GifGridItem
                {...img}
                key={img.id}
            />;
            })}</ol>
        </div>
    )
}
