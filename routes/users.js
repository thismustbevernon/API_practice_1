const express = require('express');

//this helps us create unique id for our users, specific to this project

const { v4: uuidv4 } = require('uuid');

const router = express.Router();

//create a  mock database containing two users, using let because we will change the value 
let users = [{
    firstName:"John",
    lastName:"Doe",
    age:25
},{
    firstName:"Mary",
    lastName:"Jane",
    age:24
}]

//all routes here are starting with /users

router.get('/',(req,res)=>{

    res.send(users);
});

router.post('/',(req,res)=>{
  
    const newUser = req.body;
    //generate a user Id 
    const userId = uuidv4();
    // add it to the user object using the spread 
    const newUserWithId = { ...newUser, id:userId}
    users.push(newUserWithId);

    res.send(`User with the name ${newUser.firstName} added to the database`);

});

router.get('/:id',(req,res)=>{
    console.log(req.params);
    const {id} = req.params;
    const foundUser = users.find((user)=> user.id === id);
    res.send(foundUser);
});

router.delete('/:id',(req,res)=>{

    const {id} = req.params;
    users = users.filter((user)=> user.id != id)
    res.send(`User with the id ${id} deleted from the database`);
});

router.patch('/:id',(req,res)=>{

    const {id} = req.params;
    user = users.find((user)=> user.id === id);

    const {firstName, lastName , age } = req.body;

    if (firstName){
        user.firstName = firstName;
    }

    if (lastName){
        user.lastName = lastName;
    }

    if (age){
        user.age = age;
    }


    res.send(`User with the id ${id} has been updated`);
});


module.exports = router;
