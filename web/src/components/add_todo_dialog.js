import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, FormGroup } from 'reactstrap';

export default class AddTodoDialog extends Component {

    toggleAddTodoDialog = (e) => {
        this.props.toggleAddTodoDialog(!this.props.is_add_todo_dialog_opened)
    }

    addNewTodo = (e) => {
        this.props.addNewTodo(e)
        this.toggleAddTodoDialog(e)
    }

    handleChange = (e) => {
        this.props.handleChange(e)    
    }

    render() {
        return (
            <div>
                <Button color="primary" onClick={this.toggleAddTodoDialog}>Add new Todo</Button>
                <Modal isOpen={this.props.is_add_todo_dialog_opened} >
                    <ModalHeader toggle={this.toggleAddTodoDialog}>Add New TODO</ModalHeader>
                    <ModalBody>
                        <FormGroup >
                            <Label for="Title">Task </Label>
                            <Input name="task"
                                value={this.props.newTodoList.task}
                                onChange={this.handleChange} />

                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.addNewTodo}>OK</Button>{' '}
                        <Button color="secondary" onClick={this.toggleAddTodoDialog}>Cancel</Button>
                    </ModalFooter>
                </Modal>

            </div>
        );
    }
}


