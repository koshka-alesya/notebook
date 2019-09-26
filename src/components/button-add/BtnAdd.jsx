import React from 'react';

const BtnAdd= (props) => {
    return(
        
        <button type="button" onClick={ ()=> {props.newNote('Новая заметка','') }}>+Заметка</button>)
}

export default BtnAdd;