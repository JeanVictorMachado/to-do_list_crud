const mongoose = require('../config/datadase');
const { model } = require('../config/datadase');

//representação das nossas tarefas
const TaskSchema = new mongoose.Schema({
  macaddress: {type: String, required: true},
  type: {type: Number, required: true},
  title: {type: String, required: true},
  description: {type: String, required: true},
  when: {type: Date, required: true},
  done: {type: Boolean, default: false},
  created: {type: Date, default: Date.now()}
});

const TaskModel = mongoose.model('Task', TaskSchema);

module.exports = TaskModel;
