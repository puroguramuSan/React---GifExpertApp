import React, { useState } from 'react'
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {

    const [ inputValue, setInputValue ] = useState('');

    const handleInputChange = (e) => {
        
        const target = e.target;

        setInputValue( target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if( inputValue.trim().length > 2) {
            setCategories(cat => [ inputValue, ...cat]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit = { handleSubmit }>
            <input 
                type = "text"
                value = { inputValue }
                onChange = { handleInputChange }
            />
            <button>Agregar Categoría</button>
        </form>
    )
}

AddCategory.defaultProps = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;