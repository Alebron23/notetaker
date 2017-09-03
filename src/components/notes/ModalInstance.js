import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ModalInstance = (props) => {
    return(
      <div className="static-modal">
        <Modal show={props.show}> 
          <Modal.Header>
            <Modal.Title>{props.title}</Modal.Title>
          </Modal.Header>
    
          {/* <Modal.Body>
            One fine body...
          </Modal.Body> */}
    
          <Modal.Footer>
            <Button onClick={props.hide}>No</Button>
            <Button bsStyle="primary" onClick={props.handleUpdate}>Yes</Button>
          </Modal.Footer>
    
        </Modal>
      </div>
    )   
}

  export default ModalInstance;