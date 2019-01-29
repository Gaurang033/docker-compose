import React, {Component} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, FormGroup} from 'reactstrap';

class AddTodo extends Component{
  render(){
    return(
      <div>
        <Button color="primary" onClick={this.props.toggleNewTodoModal}>Add new Todo</Button>
        <Modal isOpen={this.props.newTodoModal} >
        <ModalHeader toggle={this.props.toggleNewTodoModal}>Modal title</ModalHeader>
        <ModalBody>
          <FormGroup >
            <Label for="Title">Task </Label>
            <Input name="task"
                   value= {this.props.newTodoList.task}
                   onChange={this.props.handleChange}/>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.props.addNewTodo}>OK</Button>{' '}
          <Button color="secondary" onClick={this.props.toggleNewTodoModal}>Cancel</Button>
        </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AddTodo
