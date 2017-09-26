import React from 'react';
import { mount } from 'enzyme';
import Notetaker from '../src/components/Notetaker.js';
import sinon from 'sinon';
import Cookies from 'universal-cookie';

// jest.mock('universal-cookie', () => {

//     class FakeCookie {
//         constructor() {
//             this.cookie = {key: []};
//         }

//         get(key) {
//             return this.cookie.key
//         }
//         set(key, val) {
//             this.cookie.key.push(val);
//         }
//     }

//     return FakeCookie
// });

// Begin test with describe block that describes our
// overall test. 
describe('Notetaker', () => {
    const cookies = new Cookies();
    const displayedNotes = ['foo', 'bar', 'baz'];
    cookies.set('NOTES', ['foo']);

    // Now setup data for our test. 
    let notetaker = mount(<Notetaker/>); 
    // let componentDidMount = notetaker.instance().componentDidMount();
    // componentDidMount = jest.fn();
    //Cookies.set('NOTES', 'foo');


    // it blocks takes two parameters to run the test.
    // The description and the function that runs the actual test
    it('renders the App title', () => {
        // Before you do anything, run a conosle.log(debug)
        // to see if you mounted it correctly
        //console.log(notetaker.debug());
        let title = 'Note To Self';
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

    describe('Testing componentDidMount', () => {
        //TEST THAT I CANNOT GET TO WORK 
        
        it('sets the state from cookies', () => {
            console.log(notetaker.state());
            expect(notetaker.state().displayedNotes).toEqual(['foo']);
        });
    });

    describe('calling functions', () => {
        const e = { target: { value: 'foo' } }
        notetaker.instance().handleText(e) // in this function it calls this.setState()
        
        it('sets the text after calling the handleText function', () => {
            expect(notetaker.state().text).toEqual('foo');
        });

        afterEach(() => {
            notetaker.setState({notes: [], displayedNotes: [], text: ''});
        });
    });

    describe('calling handleSave function', () => {

        const e = { target: { value: 'foo' }, preventDefault: jest.fn() };
        notetaker.instance().handleSave(e);

        it('sets the notes, displayedNotes and text in state after handleSave is called', () => {
            expect(notetaker.state().text).toEqual('');
        });
    });
});
