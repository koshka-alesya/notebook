import React, {Component} from 'react';

class Note extends Component{
    constructor(props){
        super(props);
        this.changeTitle = this.changeTitle.bind(this);
        this.changeText = this.changeText.bind(this);
        
        this.edit = this.edit.bind(this); //to the parent
        this.delete = this.delete.bind(this); //to the parent
        
        this.state = {
            title: this.props.title,
            text: this.props.text,
            editing: false}; //by default render as text
    }

    edit() { //lift state up to the parent 
        this.props.onUpdate(this.props.index, this.state.title, this.state.text);
        this.setState({editing: !this.state.editing});
      }

    delete() { //lift state up to the parent    
        this.props.onRemove(this.props.index);
    }

    changeTitle(e) {
        this.setState({title: e.target.value});
      }
      
    changeText(e) {
        this.setState({text: e.target.value});
      }

      renderNoteOrEdit() { //when clicks edit button pencil-icon toggle between input and div
        if(this.state.editing) {
          return (<div className="inner">   
                    <div className="title">
                         <button type="button" className="btn del" onClick={this.delete}>Удалить</button>  
                         <button type="button" className="btn save" onClick={this.edit}>Сохранить</button>
                    </div>
                              
                    <div className="form-group">
                        <input type="text" value={this.state.title} onChange={this.changeTitle} className="form-control" />  
                    </div>                    
                    <div className="form-group">
                        <textarea  name="text" value={this.state.text} onChange={this.changeText} className="form-control" rows="4"/>
                    </div>
              
                 </div>)
        } else {
           return (<div className="inner">
                    <button type="button" className="btn del" onClick={this.delete}>Удалить</button>
                    <button type="button" className="btn" onClick={this.edit}>Редактировать</button>
                    <div className="title">
                         <h2>{this.props.title}</h2>
                    </div>
                    <div className="text"> 
                       <p>{this.props.text}</p>
                    </div>
                   </div>)
        }
      }
      render() { //render function based on value {this.state.editing}
        return ( <div className="note col-sx-10 col-sm-6 col-md-4">
                    {this.renderNoteOrEdit()}
                 </div>
        )
      }
    
}

export default Note;