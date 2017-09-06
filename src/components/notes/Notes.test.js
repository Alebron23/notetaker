import React from 'react';

// This function allows us to mimick the mounting behavior 
// of this component onto the actual dom or application
import { mount } from 'enzyme'; 
// Have to import it so you can actually mount the component. 
import Notes from './Notes';

// Can use the spread operator here and pass in the props like {...props}.
// Spread operator spreads the attributes of the object out to our component. 
// But in es6 it does more.
const props = { displayedNotes: ['test element']};

// We are going to wrap our stuff in a special helper function
// from jest called describe. You have access to it globally.
// Second Parameter is a function that runs all of our tests.
// We need to mount the component to test it. We can test behavior like 
// the structure of its render function, how it manipulates states, things that 
// happen when a user clicks on a button, or types characters into input.   
describe('Note', () => {
                                       
    let notes = mount(<Notes displayedNotes={props.displayedNotes}/>);

    // it takes a string as it's first parameter that describes what
    // we are going to test. Enzyme has a debug function that converts 
    // the rendered component to text to see what it looks like. 
    it('renders the notes from array', () => {
        //console.log(displayedNotes.debug());

        // expect(jest method) check for certain parts of the note match 
        // certain strings or varibales. Then we can use the enzyme function 
        // to find the text content of our paragraph element within the mounted 
        // component. Look through yourself by using find and find paragraph tag 
        // defined by p. 
        expect(notes.find('h3').text()).toEqual('Notes');
    });

    describe('when rendering the form', () => {
        it('renders a Form Component', () => {
            expect(notes.find('Form').exists()).toBe(true);
        });

        it('renders FormControl component', () => {
            expect(notes.find('FormControl').exists()).toBe(true);
        });

        it('renders delete ModalInstance component', () => {
            expect(notes.find('ModalInstance').at(0).exists()).toBe(true);
        });

        it('renders save ModalInstance component', () => {
            expect(notes.find('ModalInstance').at(0).exists()).toBe(true);
        });
    });
});








