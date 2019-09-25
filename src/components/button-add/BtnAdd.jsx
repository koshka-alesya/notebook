import React from 'react';

const BtnAdd= (props) => {
    return(
        
        <button type="button" onClick={ ()=> {props.newNote('Новая заметка',''); props.updateData({active:0}); }}>+Заметка</button>)
}

export default BtnAdd;