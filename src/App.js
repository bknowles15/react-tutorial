import React from 'react';
import { useState, useEffect } from 'react';
import Table from './Table';
import Form from './Form';

const App = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(data => setTodos(data.slice(0, 3))) // Shorten for simplicity
            .catch(error => console.log(error));
      }, [])

    const handleSubmit = todo => {
        const newTodo = {
            id: todos[todos.length - 1].id + 1,
            title: todo.title,
            completed: false
        }
        console.log(newTodo);
        setTodos([...todos, newTodo])
    }
    
    const updateTodo = id => {
        const index = todos.findIndex(todo => todo.id === id);
        let updatedTodos = [...todos];
        updatedTodos[index].completed = !updatedTodos[index].completed;
        setTodos(updatedTodos);
    }

    return (
        <div className="container">
            <h1>React Tutorial</h1>
            <p>Add a "Todo" with a name and time to the table.</p>
            <Table
                todoData={todos}
                updateTodo={updateTodo}
            />
            <h3>Add New</h3>
            <Form handleSubmit={handleSubmit} />
        </div>
    )
}

// class App extends Component {
//     state = {
//         todos: []
//     };

//     updateTodo = index => {
//         const { todos } = this.state;
    
//         this.setState({
//             todos: todos.filter((todo, i) => { 
//                 return i !== index;
//             })
//         });
//     }

//     handleSubmit = todo => {
//         this.setState({todos: [...this.state.todos, todo]});
//     }

//     render() {
//         const { todos } = this.state;
        
//         return (
//             <div className="container">
//                 <h1>React Tutorial</h1>
//                 <p>Add a "Todo" with a name and time to the table {React.version}.</p>
//                 <Table
//                     todoData={todos}
//                     updateTodo={this.updateTodo}
//                 />
//                 <h3>Add New</h3>
//                 <Form handleSubmit={this.handleSubmit} />
//             </div>
//         );
//     }
// }

export default App;