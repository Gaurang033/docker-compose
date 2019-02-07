import React, {Component} from 'react' 
import TodoListContainer from './containers/todo_list_container';
import AddTodoContainer from './containers/add_todo_container';

class App extends Component{
 render(){
  return(        
    <div className="App container">
     <AddTodoContainer/>
     <TodoListContainer/>{' '}

     </div>
   );
 }
}

export default App