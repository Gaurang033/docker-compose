import React, {Component} from 'react'
import { Button} from 'reactstrap';


class TodoList extends Component{
  render(){
      if (this.props.list){
          let todos = this.props.list;
          return  (Object.keys(todos).map((key, value) => (
            <tr key={key}>
            <td>{key}</td>
            <td>{todos[key]}</td>
            <td>
              <Button color="success" className="mr-2" onClick={this.props.editTodo.bind(this,todos[key])}>Edit</Button>
              <Button color="danger" onClick={this.props.deleteTodo.bind(this, key)}>Delete</Button>
            </td>
            </tr>
          )));

        }else{
          return(<p>loading</p>)
        }
  }
}

export default TodoList
