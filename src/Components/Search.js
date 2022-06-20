import React from 'react'
import './note.css';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';

function Search({handleSearchNote}) {
    return (
        <>
            <div className='search' >
                <SearchSharpIcon
                    sx={{ left: 60, position: 'absolute', top: 90 }}
                />
                <input
                onChange={(e) => handleSearchNote(e.target.value)}
                    className='searchInput'
                    placeholder='Search...' />
            </div>
        </>
    )
}

export default Search