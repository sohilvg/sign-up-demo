const express = require('express');
const router = express.Router();
const knex = require('knex')({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'postgres',
      database : 'restaurant_user_data'//change name before start  restaurant_user_data//
    }
  });
  router.use(function (req,res, next){
    if("OPTIONS" === req.method){
        res.sendStatus(200)
    }else{
        next();
    }
})

router.post("/login",async function(req,res)
{
    console.log(JSON.stringify(req.body));
    const result = await knex("sohil.login").insert({
        email:req.body.email,
        password:req.body.password
    })
    res.send(result);
    console.log(result);
})

router.post("/signup",async function (req,res) {
    console.log(JSON.stringify(req.body));
    const result = await knex("sohil.signup").insert({
        name:req.body.name,
        surname:req.body.surname,
        email:req.body.surname,
        password:req.body.password,
        mobile:req.body.mobile
    })
    res.send(result);
    console.log(result);
})

module.exports = router;