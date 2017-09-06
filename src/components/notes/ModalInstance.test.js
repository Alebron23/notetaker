import React from 'react';
import { mount } from 'enzyme';
import ModalInstance from './ModalInstance';

const props = { title: {delete: 'delete_title', save: 'save_title'}}

describe('Modal', () => {

    let modal = mount(<ModalInstance title={props.title.delete}/>);

    describe('when rendering Modal', () => {
        //console.log(modal.debug());
        it('renders the modal', () => {
            expect(modal.find('Modal').exists()).toBe(true);
        });

        it('renders the modal title', () => {
            expect(modal.find('Modal.Header').exists()).toBe(true);
           //expect(notes.find('h3').text()).toEqual('Notes');
        });
    });
});