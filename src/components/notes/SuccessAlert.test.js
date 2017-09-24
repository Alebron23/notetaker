import React from 'react';
import { shallow } from 'enzyme';
import SuccessAlert from './SuccessAlert.js';

describe('SuccessAlert', () => {

    let alert = shallow(<SuccessAlert handleAlertDismiss/>);

    it('renders the alert title', () => {
        expect(alert.find('h4').text()).toEqual('Your note was saved');
    });
});