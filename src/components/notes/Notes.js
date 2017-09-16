import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import ModalInstance from './ModalInstance';
import SuccessAlert from './SuccessAlert';
import './notes.css';

class Notes extends Component {

    displayNotes() {
        return this.props.displayedNotes.map((notes, index) => 
            <div className="space" key={index}>
                <div className="zebra" key={index}> 
                    <Form inline onSubmit={this.props.openSaveModal} name={index}>
                        <FormControl type="text" name={index} onChange={this.props.handleChange} value={notes} /> 
                        <Button className="button" name={index} onClick={this.props.openDeleteModal}>X</Button>
                    </Form>
                </div>
            </div>
        )  
    } 

    displayAlert(){
        if(this.props.showAlert === true){
            var props = this.props;
            
            //Have a timeout so the alert goes away after 3 seconds
            setTimeout(function(){props.hideAlert()}, 3000, props);
            return(<SuccessAlert />)
        }
    }

    render(){
        return(
            <div className="container"> 
                <h3>Notes</h3>
                {
                    this.displayAlert()
                }
                {   
                   this.displayNotes()
                } 

                {/* These only show when the delete button is pressed or the enter key is pressed */}
                <ModalInstance handleUpdate = {this.props.handleDelete}
                               title        = {'Are you sure you want to delete this note?'} 
                               hide         = {this.props.closeDeleteModal}
                               show         = {this.props.showDeleteModal} />

                <ModalInstance handleUpdate = {this.props.handleSaveChange} 
                               title        = {'Are you sure you want to save changes to this modal?'}
                               hide         = {this.props.closeSaveModal} 
                               show         = {this.props.showSaveModal} />
                                
            </div>
        );
    }
}

export default Notes;