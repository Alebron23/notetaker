import React from 'react';
import Notetaker from '../src/components/Notetaker.js';
import Cookies from 'universal-cookie';
import renderer from 'react-test-renderer'

it('notaker practice', () => {
    const displayedNotes = [ 'foo', 'bar', 'baz' ]

    const component = renderer.create(<Notetaker displayedNotes={displayedNotes} />); 
    expect(component.toJSON()).toMatchSnapshot();
})

