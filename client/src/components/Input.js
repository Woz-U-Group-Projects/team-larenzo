import React, { Component } from 'react';
import axios from 'axios';


// Create a new list item when clicking on the "Add" button
class Input extends Component {
    state = {
        action: ""
    }

    addTodo = () => {
        const task = {action: this.state.action}

        if(task.action && task.action.length > 0 ) {
            axios.post('/api/todos', task)
            .then(res => {
                if(res.data){
                this.props.getTodos();
                this.setState({action: ""})
            }
        })
        .catch(err => console.log(err))
    }else {
        alert('You must write something!')
    }

}

handleChange = (e) => {
    this.setState( {
        action: e.target.value
    })
}

render() {
    let { action } = this.state;
    return (
        <div>
            <input placeholder="Enter Task" onChange={this.handleChange} value={action} />
            <button onClick={this.addTodo}>Add</button>
        </div>

    )
 }
}

export default Input