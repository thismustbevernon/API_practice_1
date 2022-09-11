# API_practice_1


Personal Project notes:

Node commands

npm init -y
npm install --save express
node index.js
npm install --save-dev nodemon
Then update script to start

 npm start


-Set up basic express server
-Visit the API on localhost 5000
-Node and express are all about routing
-create routes which we can then wizard with the browser or send requests to.
-routes of different types: get,post,delete,patch

app.get('/', (req,res)=>{
   console.log('{TEST}');
   res.send('Hello From Homepage');
 
});

For example the message is sent to the browser when executed

-for complex routes I’ve created a new folder that separates the concern from the server file ie index.js
- use the Router
-create a user.json file which contains a schema ie model of what an user is supposed to look like
- inside the users.js , create a mock database, ie an array of two users.
-browsers can only make a get request therefore we will need a software eg postman/insomnia to test the post request.
-POST settings - body,raw,JSON 
- in the users/:id route the input id is stored in the req.params
-PATCH - used when you want to partially modify something whereas PUT is used to completely overwrite a value
- PATCH is two way since it also take the values to be updated from the client 
- when the routes file gets complex it could be advisable sometimes to create a another folder called controllers to add the callback functions separately and use them within the routes where needed - saving this for the next iteration
