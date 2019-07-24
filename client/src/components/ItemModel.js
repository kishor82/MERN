import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import { connect } from "react-redux";
import { addItem } from "../actions/itemActions";

export class ItemModel extends Component {
  state = {
    modal: false,
    item: ""
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };
  render() {
    return (
    <div>
        <Button
        color="dark"
        style={{marginBottom: '2rem'}}
        onClick={this.toggle}
        >Add Item</Button>
  

    <Modal
        isOpen={this.state.modal}
        toggle={this.toggle}
    >
    <ModalHeader toggle = {this.toggle} >Add To Shopping List</ModalHeader>
    <ModalBody>
        
        </ModalBody>      
    </Modal>
    </div>
    );
  }
}

export default connect()(ItemModel);
