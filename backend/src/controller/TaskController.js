const TaskModel = require('../model/TaskModel');
const { 
  startOfDay, 
  endOfDay, 
  startOfWeek, 
  endOfWeek,
  startOfMonth,
  endOfMonth,
  startOfYear,
  endOfYear
} = require('date-fns');

const current = new Date();

class TaskController {
  //cria uma tarefa
  async create(req, res) {
    const task = new TaskModel(req.body);
    await task
      .save()
      .then(response => {
        return res.status(200).json(response);
      })
      .catch(error => {
        return res.status(500).json({ [error]: 'Registration failed' });
      });
  }
  //atualiza uma tarefa
  async update(req, res) {
    await TaskModel.findByIdAndUpdate({'_id': req.params.id}, req.body, { new: true })
      .then(response => {
        return res.status(200).json(response);
      })
      .catch(error => {
        return res.status(500).json(error);
      })
  }
  //busca todas as terefas
  async all(req, res) {
    await TaskModel.find({ macaddress: {'$in': req.params.macaddress} })
      .sort('when')
      .then(response => {
        return res.status(200).json(response);
      })
      .catch(error => {
        return res.status(500).json(error);
      });
  }
  //busca apenas a terefa solicitada 
  async show(req, res) {
    await TaskModel.findById(req.params.id)
      .then(response => {
        if (response)
          return res.status(200).json(response);
        else
          return res.status(500).json({ error: 'tarefa não encontrada' });
      })
      .catch(error => {
        return res.status(500).json(error);
      })
  }
  //apaga uma tarefa
  async delete(req, res) {
    await TaskModel.deleteOne({ '_id': req.params.id })
      .then(response => {
        return res.status(200).json(response);
      })
      .catch(error => {
        return res.status(500).json(error);
      })
  }
  //muda status da tarefa se foi concluida (true) se não (false) ainda está em aberto
  async done(req, res) {
    await TaskModel.findByIdAndUpdate(
      {'_id': req.params.id},
      {'done': req.params.done},
      {new: true})
        .then(response => {
          return res.status(200).json(response);
        })
        .catch(error => {
          return res.status(500).json(error);
        })
  }
  //busca tarefas atrasadas
  async late(req, res) {
    await TaskModel.find({
      'when': {'$lt': current},
      'macaddress': {'$in': req.params.macaddress}
    })
    .sort('when')
    .then(response => {
      return res.status(200).json(response);
    })
    .catch(error => {
      return res.status(500).json(error);
    })
  }
  //filtrando todas as tarefa do dia
  async today(req, res) {
    await TaskModel.find({
      'macaddress': {'$in': req.params.macaddress},
      'when': {'$gte': startOfDay(current), '$lte': endOfDay(current)}
    })
    .sort('when')
    .then(response => {
      return res.status(200).json(response);
    })
    .catch(error => {
      return res.status(500).json(error);
    })
  }
  //filtrando todas as tarefa da semana
  async week(req, res) {
    await TaskModel.find({
      'macaddress': {'$in': req.params.macaddress},
      'when': {'$gte': startOfWeek(current), '$lte': endOfWeek(current)}
    })
    .sort('when')
    .then(response => {
      return res.status(200).json(response);
    })
    .catch(error => {
      return res.status(500).json(error);
    })
  }

  //filtrando todas as tarefa do mês
  async month(req, res) {
    await TaskModel.find({
      'macaddress': {'$in': req.params.macaddress},
      'when': {'$gte': startOfMonth(current), '$lte': endOfMonth(current)}
    })
    .sort('when')
    .then(response => {
      return res.status(200).json(response);
    })
    .catch(error => {
      return res.status(500).json(error);
    })
  }
  //filtrando todas as tarefa do ano
  async year(req, res) {
    await TaskModel.find({
      'macaddress': {'$in': req.params.macaddress},
      'when': {'$gte': startOfYear(current), '$lte': endOfYear(current)}
    })
    .sort('when')
    .then(response => {
      return res.status(200).json(response);
    })
    .catch(error => {
      return res.status(500).json(error);
    })
  }

}

module.exports = new TaskController();
