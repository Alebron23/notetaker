import React from 'react';
import { shallow } from 'enzyme';
import Input from './Input';

describe('Input', () => {

    let input = shallow(<Input />);

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
});