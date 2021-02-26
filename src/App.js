import React from 'react';
import { useState, useEffect } from 'react';
import Table from './Table';
import Form from './Form';

const App = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(data => setTodos(data.slice(0, 3)))
            .catch(error => console.log(error));
    }, [])

    const addTodo = (title) => {
        const newTodo = {
            id: todos.length + 1,
            title: title,
            completed: false
        }
        setTodos([...todos, newTodo]);
    }

    const updateTodo = index => {
        let updatedTodos = [...todos];
        updatedTodos[index].completed = !updatedTodos[index].completed;
        setTodos(updatedTodos);
    }

    return (
        <div className="container">
            <h1>React Tutorial</h1>
            <p>Add a "Todo" to the table.</p>
            <Table todoData={todos} updateTodo={updateTodo} />
            <h3>Add New</h3>
            <Form addTodo={addTodo} />
        </div>
    );
}

export default App;