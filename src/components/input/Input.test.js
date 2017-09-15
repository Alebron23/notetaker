import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Input from './Input';
import Notetaker from '../Notetaker';

describe('Input', () => {
    const mockHandleText = jest.fn();
    const mockHandleSave = jest.fn();
    const mockUpdate     = jest.fn();
    const props          = {handleText: mockHandleText, handleSave: mockHandleSave, update: mockUpdate};
    let input            = mount(<Input {...props} />);
    //let takeNotes        = shallow(<Notetaker />);

    describe('When rendering the form', () => {

        it('renders the from', () => {
            expect(input.find('Form').exists()).toBe(true);
        });

        it('renders the FormControl input box', () => {
            expect(input.find('FormControl').exists()).toBe(true);
        });

        it('renders the Button', () => {
            expect(input.find('Button').exists()).toBe(true);
        });
    });

    describe('when entering a note', () => {
        

        // When testing clicks, you have to make sure it 
        // fires before the other it() statements, so you use
        // beforeEach(). Fires before each of the subsequent it blocks.
        // We have to simulate a change of our FormControl Component.
        // Use simulate to fire what is passed in, this case a change event.
        // FormControl gives back value from it's target event we can specify 
        // that its value should change by providing simulate with an 
        // object that has a target key itself which is also an object with 
        // out value. We are tesing that our state updates with the change value. 
        beforeEach(() => {
            input.find('FormControl').simulate('change');
        });

        it('calls handleText callback after onChange happens', () => {
            expect(props.handleText).toHaveBeenCalled();
        })

        // it('updates the text in state', () => {
        //     console.log(takeNotes.props().children[1].props);
        //     takeNotes.props().children[1].props.handleText();
        //     expect(takeNotes.state().text).toEqual(testNote);
        // });

        
            //LAST TEST THAT I CANNOT GET TO WORK
            // beforeEach(() => {
            //     input.find('Button').simulate('click', { t: 'a'});
            // });

            // it('adds the note to state', () => {
            //     expect(props.update).toHaveBeenCalled();
            // });
    });
});