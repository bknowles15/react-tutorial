import React from 'react';
import { useState } from 'react';

const Form = (props) => {
    const [title, setTitle] = useState('');

    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
        props.addTodo(title);
        setTitle('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input 
                type="text" 
                title="title" 
                id="name"
                value={title}
                onChange={handleChange} />
            <button type="submit">
                Submit
            </button>
        </form>
    );
}


// const Form = (props) => {
//     const [title, setTitle] = useState('');

//     const handleChange = (event) => {
//         setTitle(event.target.value);
//     }

//     const onFormSubmit = (event) => {
//         event.preventDefault();
        
//         props.handleSubmit(title);
//         setTitle('');
//     }

//     return (
//         <form onSubmit={onFormSubmit}>
//             <label>Title</label>
//             <input 
//                 type="text" 
//                 title="title" 
//                 id="name"
//                 value={title} 
//                 onChange={handleChange} />
//             <button type="submit">
//                 Submit
//             </button>
//         </form>
//     );
// }

export default Form;
