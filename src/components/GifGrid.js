import React from 'react';
import PropTypes from 'prop-types';
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    const { data, loading } = useFetchGifs( category );

    console.log(data);

    return (
        <div>
            <h3 className="animate__animated animate__fadeIn" data-testid="category-title">{category}</h3>
            { loading && <p className="loading-label animate__animated animate__flash">Loading...</p> }
            <ol className="card-grid">{ data.map(img => {

                return <GifGridItem
                {...img}
                key={img.id}
            />;
            })}</ol>
        </div>
    )
}

GifGridItem.propTypes = {
    category: PropTypes.string.isRequired
}
