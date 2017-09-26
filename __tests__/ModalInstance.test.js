import React from 'react';
import { mount, shallow } from 'enzyme';
import ModalInstance from '../src/components/notes/ModalInstance.js';

const mockUpdate = jest.fn();
const mockHide   = jest.fn();
const props      = { title: 'delete_title', handleUpdate: mockUpdate, hide: mockHide, show: false}

describe('Delete Modal', () => {

    let modal = shallow(<ModalInstance {...props}/>);

    describe('when rendering DeleteModal', () => {
        //console.log(modal.debug());
        it('renders the modal', () => {
            expect(modal.find('Modal').exists()).toBe(true);
        });

        it('renders the modal title', () => {
           // took me a while to figure out to call ModalTitle becuase of the Modal.Title
           // and then also to figure out the props().children thing too. 
            expect(modal.find('ModalTitle').props().children).toEqual('delete_title');
           //expect(notes.find('h3').text()).toEqual('Notes');
        });

        it('renders the No button', () => {
            expect(modal.find('Button').at(0).props().children).toEqual('No');
        });

        it('renders the Yes Button', () => {
            expect(modal.find('Button').at(1).props().children).toEqual('Yes');
        });

        //console.log(modal.props().children.props.show)

        it('has show value passed into component', () => {
            expect(modal.props().children.props.show).toEqual(false);
        });

        describe('when clicking buttons', () => {
            beforeEach(() => {
                modal.find('Button').at(0).simulate('click');
                modal.find('Button').at(1).simulate('click');
            });

            it('calls the handleUpdate callback when yes button is clicked', () => {
                expect(props.handleUpdate).toHaveBeenCalled();
            });

            it('calls the hide callback when the no button is clicked', () => {
                expect(props.hide).toHaveBeenCalled();
            })
        });
    });
});