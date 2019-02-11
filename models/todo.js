const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//schema for todo
const TodoSchema = new Schema({
    action: {
        type: String,
        required: [true, 'The Todo text field is required']
    }
})

//create model for todo
const Todo = mongoose.model('todos', TodoSchema);

module.exports = Todo;
