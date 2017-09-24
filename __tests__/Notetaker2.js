import React from 'react';
import Notetaker from '../src/components/Notetaker.js';
import renderer from 'react-test-renderer'
import Cookies from 'universal-cookie';


// jest.mock('universal-cookie', () => {
//     console.log('RUN')
//     class FakeCookie {
//         constructor() {
//             console.log('CONSTRUCTOR')
//         }

//         get(key) {
//             console.log('GET')
//             return ['fake', 'fake2']
//         }
//         set(key, val) {
            
//         }
//     }

//     return FakeCookie
// });



it('notaker practice', () => {
    const cookies = new Cookies
    const displayedNotes = ['foo', 'bar', 'baz']
    cookies.set('NOTES', displayedNotes)

    const component = renderer.create(<Notetaker />); 
    expect(component.toJSON()).toMatchSnapshot();
})





