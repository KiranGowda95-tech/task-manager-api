const express = require('express');

const app = express();

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

app.listen(port, () => {
  console.log('app is up and running in the port 3000');
});
