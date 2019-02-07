import React, { Component } from 'react'
import { Button, Table} from 'reactstrap';


export default class TodoList extends Component {

    componentDidMount() {
        this.props.fetch_todos()
    }

    deleteTodo = (key) => {
        console.log(key)
        this.props.deleteTodo(key)
    }

    todo_list = () => {
        console.log(this.props.todos)
        if (this.props.todos) {
            return (Object.keys(this.props.todos).map(key => {
                return <tr key={key}>
                    <td>{key}</td>
                    <td>{this.props.todos[key]}</td>
                    <td>
                        <Button color="danger" onClick={this.deleteTodo.bind(this, key)}>Delete</Button> 
                    </td>
                </tr>


            }))
        } else {
            return <div>Loading</div>
        }

    }

    render() {

        return (
            <div>
                <Table>
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>details</td>
                            <td>action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.todo_list()}
                    </tbody>
                </Table>
            </div>


        )
    }
}
