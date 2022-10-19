import React, { useState } from 'react';
import data from '../data.json';

export function SearchBar () {
    const [search, setSearch] = useState('');

    return (
        <div className="search-details">
            <input className="search-field"
            type="text" 
            placeholder="Search by titles, category or serial number" 
            const onChange={(e) => {
                setSearch(e.target.value);
                }} 
            />

            <div className="results">
                {data.filter((value)=> {
                    if (search == '') {
                        return value
                    } else if ((value.Name.toLowerCase().includes(search.toLowerCase())) || (value.Category.toLowerCase().includes(search.toLowerCase()))) {
                        return value
                    }
                }).map((value, key) => {
    
                    return (
                        <div key={key}>
                            <p><strong>{value.Name}</strong></p>
                            <p><strong>Category:</strong> {value.Category}</p>
                            <p><strong>Serial Number:</strong> {value.SerialNumber} </p>
                            <img className="book-image-search" src={value.Image} />
                        </div>
                    )
                })}
            </div>
        </div>
    );
}


