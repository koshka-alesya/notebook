import React, {Component} from 'react';
import './App.css';
import Note from './components/node/Note';
import NoteItem from './components/note-item/NoteItem';
import Form from './components/form/Form';
import Search from './components/search/Search';
import BtnAdd from './components/button-add/BtnAdd';



class App extends Component {
  constructor(props) {
      super(props);
      this.newNote = this.newNote.bind(this); //when save form 
      this.saveNote = this.saveNote.bind(this); //localStorage & this.state
      this.removeNote = this.removeNote.bind(this); 
      this.updateNote = this.updateNote.bind(this); //whan clicked save-icon in a note
      this.updateData=this.updateData.bind(this);
      
      this.state = {
        notes:[],
        active:0,
        search:'',
        icons:{
        delete:require('./styles/icons/delete.svg'),
        save: require('./styles/icons/save.svg'),
        edit: require('./styles/icons/edit.svg'),
      }
    
      };
     
    }

  componentDidMount() {
      let notes = localStorage.getItem("notes");
      this.initialData=JSON.parse(notes);
        if (notes)
           this.setState({notes: this.initialData});
    } 
  
  updateData(value) {
      this.setState(value);
    }

  newNote(title, text) { 
      let notes = [{title: title, text: text}].concat(this.state.notes);   
      this.saveNote(notes);
      this.setState({active: 0});
    } 
    
  saveNote(notes) {
      localStorage.setItem('notes', JSON.stringify(notes)); 
      this.setState({notes: notes});
    } 
  
  removeNote(index) {
      let notes = this.state.notes;
      notes.splice(index, 1);
      this.saveNote(notes);
    }
    
  updateNote(index, title, text) {

      let notes = this.state.notes;
      notes[index].title = title;
      notes[index].text = text;
      this.saveNote(notes);
    }

    render() { //Conditional rendering: Ternary operator shows saved notes from local storage. Or plain text
       
      let list=this.state.notes.map((obj, i) =>  
      <NoteItem key={i} index={i} title={obj.title} text={obj.text} updateData={this.updateData}/>    
      );
      
      
      let note;

      for (var i=0; i<this.state.notes.length;i++){ //кирпич

        if (i===this.state.active)
           note = <Note key={i} index={i} active={this.state.active} notes={this.state.notes} title={this.state.notes[i].title} text={this.state.notes[i].text } onUpdate={this.updateNote} onRemove={this.removeNote} icons={this.state.icons}/>
      }

      
    
      
      /*конец кирпича <div className="col-1 offset-7 offset-md-9">
                     <button  type="button" className="btn btn-warning" data-toggle="collapse" data-target="#form">+</button>
                     </div>*/
       
       return ( <div className="App">
           
                 <header className="header">
                   <h1 className="header__titl">Notepad</h1>
                 </header>

                 <BtnAdd newNote={this.newNote} updateData={this.updateData} />
                 
                 <div className="container">
                  <div className="container__left">

                    <Search search={this.state.search} notes={this.initialData} updateData={this.updateData}/>
                    {list}
                  </div>
                    
                  <div className="container__right">
                    
                      {note}
                    
                  </div>

                 </div>

                 </div>     

                 
       )
     }
  
 
    }
 
  

  export default App;