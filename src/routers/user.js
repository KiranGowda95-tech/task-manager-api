const express = require('express');

const router = new express.Router();

router.patch('/user/:id', async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['name', 'email', 'password', 'age'];
  const isValidation = updates.every((update) => {
    allowedUpdates.includes(update);
  });
  if (!isValidation) {
    return res.status(400).send({ error: 'Invalid updates!' });
  }
});

router.post('/users/login',async(req,res)=>{
  try{
    const user=await User.findByCredentials(req.body.email,req.body.password)
  }catch(e){

  }
})