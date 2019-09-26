import React, {Component} from 'react';
import IconBtn from '../icon-btn/IconBtn';

class Note extends Component{
    constructor(props){
        super(props);
        this.changeTitle = this.changeTitle.bind(this);
        this.changeText = this.changeText.bind(this);
        
        this.edit = this.edit.bind(this);
        this.delete = this.delete.bind(this); 
        this.modedit=this.modedit.bind(this);
        
        this.state = {
            title: this.props.title,
            text: this.props.text,
            editing: false}; 
    }

    edit() { 
        this.setState({title: this.props.title, text: this.props.text});
        this.props.onUpdate(this.props.index, this.state.title, this.state.text);
        this.setState({editing: false});
      }

    modedit(){
        this.setState({title: this.props.title, text: this.props.text});
        this.setState({editing: true});
    }
    
    

    delete() {
        this.props.onRemove(this.props.index);
    }

    changeTitle(e) {
        this.setState({title: e.target.value});
      }
      
    changeText(e) {
        this.setState({text: e.target.value});
      }

    renderNoteOrEdit() { 
        if(this.state.editing) {
          return (
                <form>
                <div className="note">   
                    <div className="note__top">
                        
                        <input  type="text" className="note__input" value={this.state.title} onChange={this.changeTitle} />  
                        
                        <div className = "note__top__btn">
                            <button type="button" className="note__btn" onClick={this.delete}><img className="note__btn__icon" src= {this.props.icons.delete} alt=''/></button>  
                            <button type="button" className="note__btn" onClick={this.edit}><img className="note__btn__icon" src= {this.props.icons.save} alt=''/></button>
                        </div>  
                        
                         
                    </div>
                              
                                        
                    <div className="note__textarea">
                        <textarea  name="text" value={this.state.text} onChange={this.changeText} className="form-control" rows="4"/>
                    </div>
              
                 </div>
                 </form>)
        } else {
           return (<div className="note">
                        <div className="note__top">
                            <div className="note__title">
                                    <h2>{this.props.title}</h2>
                            </div>
                            <div className = "note__top__btn">
                                <button type="button" className="note__btn" onClick={this.delete}><img className="note__btn__icon" src= {this.props.icons.delete} alt=''/></button>
                                <button type="button" className="note__btn" onClick={this.modedit}><img className="note__btn__icon" src= {this.props.icons.edit} alt=''/></button>
                            </div>
                            
                        </div>
                        <div className="note__text"> 
                            <span>{this.props.text}</span>
                        </div>
                   </div>)
        }
      }
      render() { 
        return ( <div>
                    {this.renderNoteOrEdit()}
                </div>
                 
        )
      }
    
}

export default Note;