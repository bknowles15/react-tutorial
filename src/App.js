import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';

class App extends Component {
    state = {
        todos: []
    };

    removeTodo = index => {
        const { todos } = this.state;
    
        this.setState({
            todos: todos.filter((todo, i) => { 
                return i !== index;
            })
        });
    }

    handleSubmit = todo => {
        this.setState({todos: [...this.state.todos, todo]});
    }

    render() {
        const { todos } = this.state;
        
        return (
            <div className="container">
                <h1>React Tutorial</h1>
                <p>Add a "Todo" with a name and time to the table.</p>
                <Table
                    todoData={todos}
                    removeTodo={this.removeTodo}
                />
                <h3>Add New</h3>
                <Form handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}

export default App;