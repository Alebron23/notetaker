import React from 'react';
import { mount, shallow } from 'enzyme';
import ModalInstance from './ModalInstance';

const props = { title: {delete: 'delete_title', save: 'save_title'}}

describe('Delete Modal', () => {

    let modal = shallow(<ModalInstance title={props.title.delete}/>);

    describe('when rendering DeleteModal', () => {
        //console.log(modal.debug());
        it('renders the modal', () => {
            expect(modal.find('Modal').exists()).toBe(true);
        });

        it('renders the modal title', () => {
           // var noButton = document.body.getElementsByClassName("modal")[0].getElementsByClassName("btn btn-default")[0];
           //console.log(modal.find('ModalTitle').props());
            expect(modal.find('ModalTitle').props().children).toEqual('delete_title');
           //expect(notes.find('h3').text()).toEqual('Notes');
        });

        it('renders the No button', () => {
            expect(modal.find('Button').at(0).props().children).toEqual('No');
        });

        it('renders the Yes Button', () => {
            expect(modal.find('Button').at(1).props().children).toEqual('Yes');
        });
    });
});