import React from 'react';
import { Alert } from 'react-bootstrap';

const SuccessAlert = (props) => {
    return(
        <Alert bsStyle="success" onDismiss={this.handleAlertDismiss}>
        <h4>Your note was saved</h4>
        
      </Alert>
    )
}

export default SuccessAlert;