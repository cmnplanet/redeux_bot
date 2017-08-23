const express= require('express');
const app=express();
// app.use('/files', express.static(path.join(__dirname, 'image')));
// app.use("/hello", express.static('image'));
app.get('/:name', function(req,res){ //req methods: GET, POST, PUT, DELETE, etc.
  res.send("You say goodbye " + req.params.name + " and I'll say hello");
});

app.listen(2000, function(){
  // var host= server.address().address;
  // var port= server.address().port;
  console.log(" Successfully started the express app");
});


// const MongoClient = require("mongodb").MongoClient;
// const uri = "mongodb://localhost:27017/robots";
// const data = require("./data");
//
// MongoClient.connect(uri)
// .then(function(db) {
// return db.collection("users").insertMany.
// }

// app.get("/", function(req, res) {
// 	// connect to mongodb
// 	MongoClient.connect(url)
// 		.then(function(db) {
// 			// find all users and convert the cursor to an array
// 			db.connection("users").find().toArray()
// 			.then(function(users) {
// 				// close the connection
// 				db.close();
// 				// render a template, passing an object with a key of users
// 				res.render("index", {users: users});
// 			})
// 		});
});
