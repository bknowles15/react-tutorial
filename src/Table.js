import React from 'react';

const TableHeader = () => { 
    return (
        <thead>
            <tr>
                <th>Title</th>
                <th>Completed?</th>
                <th>Toggle Completed</th>
            </tr>
        </thead>
    );
}

const TableBody = (props) => {
    const rows = props.todoData.map((todo, index) => {
        return (
            <tr key={index}>
                <td>{todo.title}</td>
                <td>{todo.completed ? 'YES' : 'NO'}</td>
                <td><button>Toggle Completed</button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

const Table = (props) => {
    const { todoData, updateTodo } = props;

    return (
        <table>
            <TableHeader />
            <TableBody todoData={todoData} />
        </table>
    );
}

export default Table;
