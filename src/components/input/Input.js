import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Form, FormControl, Button } from 'react-bootstrap';

// This component has a FormControl Input and a Button. The text that is entered in the 
// FormControl is added to an array in the OuterComponent's state after each onChange event
// and after the button is clicked the array counter is incremented that is also stored in state 
// so the next note that is entered is stored in the right position in the array. The array index is set
// to name so it can be referenced in the callback and the callback that updates the array is also 
// called from the Form Control. The button calls the update function of this component so it can 
// clear the text up the input and then it calls the callback to increment the array counter
// in the parent component which is outer component.  
class Input extends Component {

    // This function finds the FormControl DOMNode to get the value and set it to '' after the button
    // is clicked so the input will be cleared of text.
    update(event) {              
      
       //Have to check to see if the key stroke is the enter key or if it comes from the button click.
       if(event.charCode === 13 || event.type === 'react-click'){
           // Have to use this get the ref value because this.refs.input.value doesn't work.
            var input = ReactDOM.findDOMNode(this.refs.input);

            input.value = '';
            this.props.handleSave();
       }
    }
    
    render(){
        // A little purple styling for the button. 
        const buttonStyle = {
            color: 'white',
            backgroundColor: 'purple'
        }

        return( 
            // Have to have this submit event handler so the form doesn't submit when the enter key is pressed
            <Form onSubmit={this.props.handleFormSubmit}>
                {/* Form Control to enter note. Set name to the array counter so it can be assessed from 
                            the callback and calls the callback to input element into the array from the onChange. */}
                <FormControl type="text" ref="input" name={this.props.notes} onChange={this.props.handleText} onKeyPress={this.update.bind(this)} placeholder="Enter Note" />
                        
                <div style={{width: '5px', height: '5px'}}> </div>

                {/* The Button calls the update function in this component that clears the input and then
                    calls the callback function from the OuterComponent to update the array counter.*/}
                <Button style={buttonStyle} onClick={this.update.bind(this)}>Submit </Button>
            </Form>
        )
    }
}

export default Input;