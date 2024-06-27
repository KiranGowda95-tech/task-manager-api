const mongoose = require('mongoose');

const Task = mongoose.model('Task', {
  discription: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

//export default Task;
module.exports = Task;