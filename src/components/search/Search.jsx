import React from 'react';

const Search= (props)=>{

    const dataSearch= e =>{
        const value = e.target.value.toLowerCase();
        const filter=props.notes.filter(note =>{
            return note.title.toLowerCase().includes(value);
        });

        props.updateData({
            active:0,
            notes:filter,
            search:value,
        }
        )
    };
    return(
        <div className='search'>
            <input
                className='search__input'
                type="text"
                value={props.search}
                placeholder="Поиск..."
                onChange={dataSearch}

            />
        </div>
    )
}

export default Search;