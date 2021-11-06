import React, { useState } from 'react'
import { PropTypes } from 'prop-types';

export const AddCategoria = ({ setCategorias }) => {

    const [inputValue, setInputValue] = useState('');

    const cambioInputValue = (e) => {
        setInputValue(e.target.value);
    }

    const cambioSumit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategorias(categorias => [inputValue, ...categorias]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={cambioSumit}>
            <h1>{inputValue}</h1>
            <input
                type="text"
                value={inputValue}
                onChange={cambioInputValue}>

            </input>
        </form>
    )
}

AddCategoria.propTypes = {
    setCategorias: PropTypes.func.isRequired
}