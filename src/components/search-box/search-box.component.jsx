import React from 'react';

import './search-box.styles.css.css';


export const SearchBox = ({placeholder, handelChange}) => (

    <input
        className='search'
        type='Search'
        placeholder={placeholder}
        onChange={handelChange}>
    </input>

);