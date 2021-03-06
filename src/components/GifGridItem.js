import React from 'react';
import PropTypes from 'prop-types';

export const GifGridItem = ( {id, title, url} ) => {
    
    console.log({ id, title, url });
    
    return (
        <div data-testid="grid-item" className="card animate__animated animate__bounce">
            <img src={ url }/>
            <p>{ title }</p>
        </div>
    )
}

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}
