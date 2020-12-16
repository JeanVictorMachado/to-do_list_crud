const TaskModel = require('../model/TaskModel');
const { isPast } = require('date-fns');

const TaskValidation = async (req, res, next) => {

  const { macaddress, type, title, description, when } = req.body;

  if (!macaddress)
    return res.status(400).json({ error: 'macaddress é obrigatório' });
  else if (!type)
    return res.status(400).json({ error: 'type é obrigatório' });
  else if (!title)
    return res.status(400).json({ error: 'title é obrigatório' });
  else if (!description)
    return res.status(400).json({ error: 'description é obrigatório' });
  else if (!when)
    return res.status(400).json({ error: 'when é obrigatório' });
  else {
    let exists;

    if (req.params.id) {
      exists = await TaskModel
        .findOne(
        { '_id': { '$ne': req.params.id },
          'when': {'$eq': new Date(when)},
          'macaddress': {'$in': macaddress}
        });
    } else {
       //não deixa salvar uma tarefa no passado
      if (isPast(new Date(when)))
        return res.status(400).json({ error: 'escolha uma data e hora futura' });

        exists = await TaskModel
        .findOne({
          'when': {'$eq': new Date(when)},
          'macaddress': {'$in': macaddress}
        });
    }

    //não deixa salvar duas tarefas com datas ou horários iguais
    if (exists) {
      return res.status(400).json({ error: 'já existe uma tarefa nesse dia o horário' });
    }

    next();
  }
}

module.exports = TaskValidation;
