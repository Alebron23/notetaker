import React from 'react';
import { mount, shallow } from 'enzyme';
import Notetaker from './Notetaker';
import Notes from './notes/Notes.js';

// Begin test with describe block that describes our
// overall test. 
describe('Notetaker', () => {

    // Now setup data for our test. 
    let notetaker = shallow(<Notetaker/>);

    // it blocks takes two parameters to run the test.
    // The description and the function that runs the actual test
    it('renders the App title', () => {
        // Before you do anything, run a conosle.log(debug)
        // to see if you mounted it correctly
        //console.log(notetaker.debug());
        let title='Note To Self';
        expect(notetaker.find('h1').text()).toEqual(title);
    });

    describe('rendeing the imported Components', () => {
        it('renders the Input component', () => {
            expect(notetaker.find('Input').exists()).toBe(true);
        });

        it('renders Notes component', () =>{
            expect(notetaker.find('Notes').exists()).toBe(true);
        })
    });
});

