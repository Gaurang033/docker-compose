import { Button, Table, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, FormGroup} from 'reactstrap';
import axios from 'axios'
import React, { Component } from 'react';
class App extends Component {
  state = {
    TodoList: {},
    newTodoList: {
      task: ''
    },
    newTodoModal: false
  }
  constructor() {
    super();
    this.rest_server="http://localhost:5001";
  }

  componentDidMount(){
    axios.get(this.rest_server+'/todos').then((response)=>{
    this.setState({
      TodoList: response.data
      })
    });
  }

  toggleNewTodoModal = () => {
    console.log("toggleNewTodoModal")
    this.setState(prvState => {
      return {
        newTodoModal: !prvState.newTodoModal
      }
    });
  }

  todoList() {

    if (this.state.TodoList){
      let todos = this.state.TodoList;
      return  (Object.keys(todos).map((key, value) => (
        <tr key={key}>
        <td>{key}</td>
        <td>{todos[key]}</td>
        <td>
          <Button color="success" className="mr-2" onClick={this.editTodo.bind(this,todos[key])}>Edit</Button>
          <Button color="danger" onClick={this.deleteTodo.bind(this, key)}>Delete</Button>
        </td>
        </tr>
      )));

    }else{
      return(<p>loading</p>)
    }
  }


  handleChange = (event) => {
    // get name and value properties from event target
    const {name, value} = event.target
    this.setState(prevState => ({
    // update your 'list' property
    newTodoList: {
      // spread old values into this object so you don't lose any data
      ...prevState.newTodoList,
      // update this field's value
      [name]: value
    }
    }))
    console.log(this.state.newTodoList)
  }

  addNewTodo = () => {
    axios
    .post(this.rest_server+'/todos', 'task=' + this.state.newTodoList.task)
    .then(response => {
      const {id, task} = response.data
        this.setState(prevState => ({
            TodoList: {...prevState.TodoList,
                [id]: task},
            newTodoList: {
              task: ''
            }
        }));
    });
    this.toggleNewTodoModal()
  }

  deleteTodo = (id, event) => {
    console.log(id);
    console.log(event);
    console.log(event.target);
    axios
    .delete(this.rest_server+'/todos/'+id)
    .then(response=>{
        console.log(response.data);
        this.setState(prevState=>({
          TodoList: response.data
        }))
    })
  }

  editTodo = (task, event) => {
    console.log(task);

  }


  modal = () => {
    return(<div>
      <Button color="primary" onClick={this.toggleNewTodoModal}>Add new Todo</Button>
      <Modal isOpen={this.state.newTodoModal} >
      <ModalHeader toggle={this.toggleNewTodoModal}>Modal title</ModalHeader>
      <ModalBody>
        <FormGroup >
          <Label for="Title">Task </Label>
          <Input name="task"
                 value= {this.state.newTodoList.task}
                 onChange={this.handleChange}/>
        </FormGroup>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={this.addNewTodo}>OK</Button>{' '}
        <Button color="secondary" onClick={this.toggleNewTodoModal}>Cancel</Button>
      </ModalFooter>
      </Modal>

    </div>
    );
  }

  render() {
    return(
      <div className="App container">
      { this.modal() }
      <h1>TODO List</h1>
      <Table>
        <thead>
          <tr>
            <td>id</td>
            <td>detaiil</td>
            <td>action</td>
          </tr>
        </thead>
        <tbody>
          { this.todoList() }
        </tbody>
      </Table>
      </div>
    );
  }
}

export default App;
