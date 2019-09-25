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
                    <h4>{this.props.title}</h4>
                </div>

                <div className='note-item__text'>
                    <span>{this.props.text}</span>
                </div>
            </div>
        )
    }
}

export default NoteItem;