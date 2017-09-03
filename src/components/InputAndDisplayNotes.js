import React, { Component } from 'react';
import Notes from './notes/Notes.js';
import Input   from './input/Input.js';
import Cookies from 'universal-cookie';

const cookie_key = 'NOTES';
const cookies    = new Cookies();

// This component has two components to it. The Input Component allows the user 
// to enter in a note that will be displayed on the screen by the notes component. 
// After it is displayed the user can change the notes, but the changes will not be saved
// unless the enter key is pressed and they click yes from the modal thereafter. They can also 
// Delete a note but it will not be saved unless they click yes from the modal that is displayed. 
// Two arrays are used to accomplish this. One to store they notes that have only been saved and
// one to display the notes so the user can make changes to is without them being saved once those
// changes are made. 
class InputAndDisplayNotes extends Component {

    constructor(props){
        super(props);

        this.state = {
            showDeleteModal : false,
            showSaveModal   : false,
            showAlert    : false,
            displayedNotes  : [],
            notes           : [],
            index           : 0,
            text            : '',
        }

        // Methods for the two modals 
        this.openDeleteModal  = this.openDeleteModal.bind(this);
        this.closeDeleteModal = this.closeDeleteModal.bind(this);
        this.openSaveModal    = this.openSaveModal.bind(this);
        this.closeSaveModal   = this.closeSaveModal.bind(this);
        
        // Methods for the Notes Component 
        this.handleDelete     = this.handleDelete.bind(this);
        this.handleChange     = this.handleChange.bind(this);
        this.handleSaveChange = this.handleSaveChange.bind(this);

        // Methods for the Input Component 
        this.handleSave        = this.handleSave.bind(this);
        this.handleText        = this.handleText.bind(this);

        // Methods to show and hide the alert message after changes were saved. 
        this.showAlert = this.showAlert.bind(this);
        this.hideAlert = this.hideAlert.bind(this);

        // Use in both components to stop the form from submitting 
        this.handleFormSubmit  = this.handleFormSubmit.bind(this);
    }

    //Fires when our component loads onto the dom. Grabs the notes from the cookies. 
    componentDidMount() {

        //if there is nothing in the browser cookies then don't initialize the arrays
        if(cookies.get(cookie_key) !== undefined){
            var notes     = cookies.get(cookie_key);
            var displayedNotes = cookies.get(cookie_key);
        }

        console.log(notes, displayedNotes);
        
        this.setState({notes, displayedNotes});
    }

    // Adds the text typed in the Input Component to the state. 
    handleText = (event) => {
        console.log(this.state.text);

        this.setState({
            text: event.target.value
        })
    }

    // Saves the text value of text that is in state to the notes after the submit button is clicked or 
    // the enter button is pressed. 
    handleSave = () => {

        // This is destructuring of objects. It automatically grabs those variables of 
        // the same name from the state object and sets them equal to our local variable of the same name.
        var {text, notes, displayedNotes } = this.state;
        notes.push(text);
        displayedNotes.push(text);
        
        // Also if key and value are the same name in an object you can just put the one.  
        // So in this case they are both notes so you can just have the one name. 
        this.setState({ notes, displayedNotes });
        
        //Push the notes to the cookie.
        cookies.set(cookie_key, this.state.notes);
        console.log(this.state.notes, this.state.displayedNotes)
    }

    //Deletes an element from the notes after it is displayed on the screen. 
    handleDelete = () => {
        console.log(this.state.notes);

        // This is destructuring of objects. It automatically grabs those variables of 
        // the same name from the state object and sets them equal to our local variable of the same name.
        var { notes, displayedNotes } = this.state;
        notes.splice(this.state.index, 1);
        displayedNotes.splice(this.state.index, 1);
        

        // Also if key and value are the same name in an object you can just put the one.  
        // So in this case they are both notes so you can just have the one name. 
        this.setState({ notes, displayedNotes});
        this.closeDeleteModal();

        // Instead of using the delete_cookie, we push the new array so the old
        // one is overriden. Pretty much does the same thing, I think, except not using the function. 
        cookies.set(cookie_key, this.state.notes);
    }

    // Updates the displayedNotes array after text is changed once it is displayed on the 
    // screen after it is inputed and saved by the user. Only updates this array so if 
    // they don't save the changes the original note is saved instead of this one.  
    handleChange(event) {
        console.log(event.target.value);

        var { displayedNotes } = this.state;
        displayedNotes[event.target.name] = event.target.value;

        this.setState({ displayedNotes });
    }

    // Copies the value from the displayedNotes to notes after the yes button
    // is clicked from the modal. This is passed as callback to the modal inside the 
    // Notes Component and is called after the yes button is clicked. Also sets the
    // Notes array to the cookies after the state is set. 
    handleSaveChange(){
        console.log(this.state.index);

        var {notes} = this.state;
        notes[this.state.index] = this.state.displayedNotes[this.state.index];

        this.setState({ notes });
        this.closeSaveModal();
        this.showAlert();

        cookies.set(cookie_key, this.state.notes);
    }

    // doesn't allow the form to be submitted when the enter key is pressed.
    handleFormSubmit(event) {
        event.preventDefault();
    }

    // Have to save the index of the note where the delete button was pressed because you 
    // can't pass it along and also when so when the callback function is called from the 
    // modal it knows which one to delete.
    openDeleteModal(event){
        this.setState({ showDeleteModal: true, index: event.target.name});
    }

    // Sets the value to false when the no button is click from the modal. 
    // This is passed as callback to the modal in the notes component as hide={}.
    closeDeleteModal(){
        this.setState({ showDeleteModal: false});
    }

    // The index is passed along from the saveValue function of the notes component
    // after it checks if the enter key was pressed. The index has to be saved so 
    // when the handleSaveChange callback is called from the modal, that funciton can
    // grab the index from the state and save the change to that position in the array. 
    openSaveModal(index){
        console.log(index);
        this.setState({ showSaveModal: true, index: index});
    }

    // Sets the value to false when the no button is click from the modal. 
    // This is passed as callback to the modal in the Notes component as hide={}.
    closeSaveModal(){
        this.setState({ showSaveModal: false});
    }

    showAlert(){
        this.setState({ showAlert: true });
    }

    hideAlert(){
        this.setState({showAlert: false});
    }

    

    render(){
        return(
            <div className="container"> 
                <h1> NoteToSelf </h1>

                {/* Displays the input and button to input notes */}
                <Input handleFormSubmit = {this.handleFormSubmit}
                       handleSave       = {this.handleSave}
                       handleText       = {this.handleText} 
                                          {...this.state} />

                <hr />
                
                 {/* Displays the notes that are in the array.*/}
                 <Notes  handleSaveChange = {this.handleSaveChange}
                         handleChange     = {this.handleChange}
                         handleDelete     = {this.handleDelete}
                         handleFormSubmit = {this.handleFormSubmit}
                         openSaveModal    = {this.openSaveModal}
                         closeSaveModal   = {this.closeSaveModal}
                         openDeleteModal  = {this.openDeleteModal}
                         closeDeleteModal = {this.closeDeleteModal}
                         hideAlert        = {this.hideAlert}
                                            {...this.state}/>
                
            </div>
        )
    }
}

export default InputAndDisplayNotes;