import React from 'react';
import { shallow } from 'enzyme';
import SuccessAlert from './SuccessAlert';

describe('SuccessAlert', () => {

    let alert = shallow(<SuccessAlert/>);
        console.log(alert.find('Alert').props());
    it('renders the alert title', () => {
        expect(alert.find('h4').text()).toEqual('Your note was saved');
    });
});