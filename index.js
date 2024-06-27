const Task = require('./src/model/task');
const express = require('express');

const app = express();

const router = new express.Router();

router.get('/test', (req, res) => {
  res.send('from the new router');
});
app.use(router);
console.log(Task);
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('hello world');
});
app.get('/user/:id', async (req, res) => {
  const _id = req.params.id;
  try {
    const user = await User.findById(_id);
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (error) {
    console.log('error', error);
  }
  res.send('hello world');
});

app.patch('/users/:id', (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['name', 'email', 'password', 'age'];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation) {
    return res.status(400).send({ error: 'invalid updates!' });
  }
});

app.patch('/tasks/:id', async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['description', 'completed'];
  const isValidOperation = updates.includes((update) => {
    allowedUpdates.includes(update);
  });
  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid Updates!' });
  }
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(400).send();
    }
  } catch (e) {
    return res.status(400).send(e);
  }
});

app.delete('/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).send();
    }
    return res.send(user);
  } catch (e) {
    res.status(500).send();
  }
});

app.listen(port, () => {
  console.log('app is up and running in the port 3000');
});
