import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        this.initialState = {
            title: '',
            job: ''
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { title, value } = event.target;

        this.setState({
            [title] : value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { title, job } = this.state; 

        return (
            <form onSubmit={this.onFormSubmit}>
                <label>Title</label>
                <input 
                    type="text" 
                    title="title" 
                    id="name"
                    value={title} 
                    onChange={this.handleChange} />
                <button type="submit">
                    Submit
                </button>
            </form>
        );
    }
}

export default Form;
