const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('port', process.env.PORT || 8081);

app.post('/api/v1/users', (request, response) => {
  const user = request.body;

  database('users').insert(user, 'id')
    .then(user => {
      return response.status(201).json({id: user[0]})
    })
    .catch(error => {
      return response.status(500).json({error})
    })
});

app.post('api/v1/weddings', (request, response) => {
  const wedding = request.body;

  database('weddings').insert(wedding, 'id')
    .then(wedding => {
      return response.status(201).json({id: wedding[0]})
    })
    .catch(error => {
      return response.status(500).json({error})
    });
});

app.post('api/v1/tasks', (request, response) => {
  const task = request.body;

  database('tasks').insert(task, 'id')
    .then(task => {
      return response.status(201).json({id: task[0]})
    })
    .catch(error => {
      return resonse.status(500).json({error})
    });
});

app.get('/api/v1/users/:user_id', (request, response) => {
  database('users').where('user_id', request.params.user_id).select()
    .then( user => {
      return response.status(200).json(user)
    })
    .catch(error => {
      return response.status(500).json(error)
    });
});


app.listen(app.get('port'), () => {
  console.log(`you are listening on port ${app.get('port')}`)
})


module.exports = app ;

