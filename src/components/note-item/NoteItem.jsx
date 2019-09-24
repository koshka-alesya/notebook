import React, {Component} from 'react';

class NoteItem extends Component{
    constructor(props){
        super(props);
        this.state={
            title: this.props.title,
            text: this.props.text,
            index: this.props.index
        }
    }

    render(){
        return(
            <div className='note-item' onClick={() => {this.props.updateData({active: this.state.index})}}>
                <div className='note-item__title'>
                    <h2>{this.props.title}</h2>
                </div>

                <div className='note-item__text'>
                    <p>{this.props.text}</p>
                </div>
            </div>
        )
    }
}

export default NoteItem;