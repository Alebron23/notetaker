import React from 'react';
import { mount, shallow } from 'enzyme';
import { stub } from 'sinon';
import Notetaker from './Notetaker.js';
import Cookies from 'universal-cookie';
import sinon from 'sinon';
import renderer from 'react-test-renderer'

it('notaker practice', () => {
    const displayedNotes = [ 'foo', 'bar', 'baz']
    const component = renderer.create(<Notetaker displayedNotes={displayedNotes} />); 

    expect(component.toJSON()).toMatchSnapshot();
})



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

    // jest.mock('universal-cookie', () => {
    //     return { 
    //    get: jest.fn(() => mockPromise)
    //};
    // });
    // var cookieSpy = sinon.spy(Cookies, 'get');
    // jest.mock('universal-cookie');
    // notetaker.instance().componentDidMount();
    // Cookies.mockClear();

    // var fakeCookie = {
    //     cookies: [],
    //     set: function (k, v) {
    //         this.cookies[k] = v;
    //     },
    //     get: function (k) {
    //         return this.cookies[k];
    //     },
    //     reset: function () {
    //         this.cookies = [];
    //     }
    // };

// Begin test with describe block that describes our
// overall test. 




/** 
describe('Notetaker', () => {
    
    // Now setup data for our test. 
    let notetaker = shallow(<Notetaker/>); 

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

    describe('re-shallow-rendering the component', () => {
        //TEST THAT I CANNOT GET TO WORK 

        beforeEach(() => {
            // var cookieStub = sinon.stub(Cookies, "universal-cookie", function() {
            //     return fakeCookie.get();
            // });
        });

        it('reads the stored note cookies', () => {
            
        });
    });
});
**/
