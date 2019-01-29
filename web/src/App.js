import {Table} from 'reactstrap';
import axios from 'axios'
import React, { Component } from 'react';
import TodoList from './components/todolist'
import AddTodo from './components/addtodo'
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
    this.setState(prvState => (
      {newTodoModal: !prvState.newTodoModal}
    ))
  }

  handleChange = (event) => {
    // get name and value properties from event target
    const {name, value} = event.target
    this.setState(prevState => ({
    newTodoList: {
      ...prevState.newTodoList,
      [name]: value
    }
    }))
  }

  addNewTodo = () => {
    axios
    .post(this.rest_server+'/todos', 'task=' + this.state.newTodoList.task)
    .then(response => {
      const {id, task} = response.data
        this.setState(prevState => ({
            TodoList: {
                ...prevState.TodoList,
                [id]: task
              },
            newTodoList: {
              task: ''
            }
        }));
    });
    this.toggleNewTodoModal()
  }

  deleteTodo = (id, event) => {
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


  render() {
    return(

      <div className="App container">
        <h1>TODO List</h1>

        <AddTodo newTodoModal={this.state.newTodoModal}
                newTodoList = {this.state.newTodoList}
                toggleNewTodoModal={this.toggleNewTodoModal}
                addNewTodo = {this.addNewTodo}
                handleChange = {this.handleChange}/> {' '}

        <Table>
          <thead>
            <tr>
              <td>ID</td>
              <td>Details</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            <TodoList list={this.state.TodoList}
                      editTodo={this.editTodo}
                      deleteTodo={this.deleteTodo}/>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default App;
