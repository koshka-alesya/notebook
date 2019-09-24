import React, {Component} from 'react';
import './App.css';
import Note from './components/node/Note';
import NoteItem from './components/note-item/NoteItem';
import Form from './components/form/Form';



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
        active:1,
      };
     
    }

  componentDidMount() {
      let notes = localStorage.getItem("notes");
        if (notes)
           this.setState({notes: JSON.parse(notes)});
    } 
  
  updateData(value) {
      this.setState({active: value});
    }

  newNote(title, text) { //prepend new object   
      let notes = [{title: title, text: text}].concat(this.state.notes);   
      this.saveNote(notes);
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
      const instruction = <div className="col-xs-12 col-sm-6 offset-sm-3">The app uses local storage to keep changes in the client's cache.
                            Click orange round button &#x02197; to add a new note. You can edit or delete notes. 
                            If you delete your browser's temporary files then you will lose your notes. </div>
             
      let notes = this.state.notes.map((obj, i) =>  
                  <Note key={i} index={i} title={obj.title} text={obj.text} onUpdate={this.updateNote} onRemove={this.removeNote} />
      );      
      let list=this.state.notes.map((obj, i) =>  
      <NoteItem key={i} index={i} title={obj.title} text={obj.text} updateData={this.updateData}/>    
      );
      
      
      let note;

      for (var i=0; i<this.state.notes.length;i++){ //кирпич

        if (i===this.state.active)
           note = <Note key={i} index={i} title={this.state.notes[i].title} text={this.state.notes[i].text } onUpdate={this.updateNote} onRemove={this.removeNote}/>
      }

      
    
      
      //конец кирпича
       
       return ( <div className="container-fluid">
           
                 <div className="row header">
                   <h1 className="col-2">Notepad</h1>
                   <div className="col-1 offset-7 offset-md-9">
                     <button  type="button" className="btn btn-warning" data-toggle="collapse" data-target="#form">+</button>
                   </div>
                 </div>
                 
                 <Form onSend={this.newNote}/>
           
                 <div className="container-fluid">  
                     {this.state.notes.length > 0 ? notes : instruction }         
                 </div> 

                 <div className='note-list'>
                  {list}
                 
                  {note}
                 </div>

                 </div>     

                 
       )
     }
  
 
    }
 
  

  export default App;