import React from 'react';
import Notetaker from '../src/components/Notetaker.js';
import renderer from 'react-test-renderer'
import Cookies from 'universal-cookie';


// var cookieSpy = sinon.spy(Cookies, 'get');
// notetaker.instance().componentDidMount();
// Cookies.mockClear();

// beforeEach(() => { 
//     notetaker.instance().componentDidMount();
// });

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

// import renderer from 'react-test-renderer'

// it('notaker practice', () => {
//     const displayedNotes = [ 'foo', 'bar', 'baz']
//     const component = renderer.create(<Notetaker displayedNotes={displayedNotes} />); 

//     expect(component.toJSON()).toMatchSnapshot();
// })

/*
it('notaker practice', () => {
    const displayedNotes = [ 'foo', 'bar', 'baz']
    const component = renderer.create(<Notetaker displayedNotes={displayedNotes} />); 
    
    expect(component.toJSON()).toMatchSnapshot();

    const e = { target: { value: 'foo' } }
    component.getInstance().handleText(e) // in this function it calls this.setState()

    expect(component.toJSON()).toMatchSnapshot();
})


it('notaker practice', () => {
    const displayedNotes = [ 'foo', 'bar', 'baz']
    const component = renderer.create(<Notetaker displayedNotes={displayedNotes} />); 
    
    const tree = component.toJSON()
    tree.props.children[0].props.onClick()

    expect(component.toJSON()).toMatchSnapshot();
})

*/

it('notaker practice', () => {
    const cookies = new Cookies
    const displayedNotes = ['foo', 'bar', 'baz']
    cookies.set('NOTES', displayedNotes)

    const component = renderer.create(<Notetaker />); 
    console.log(component);
    expect(component.toJSON()).toMatchSnapshot();
})





