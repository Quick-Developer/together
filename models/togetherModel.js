//include mongoose in file
var mongoose = require('mongoose');

//Connecting to the MongoDB Database
mongoose.connect('mongodb://localhost/activityDB');


//the schema constructor function
var Schema = mongoose.Schema;
//create a new instance of schema

let userSchema = new mongoose.Schema({
    name: String,
    password: String
});


let locationSchema = new mongoose.Schema({
    lng: Number,
    lat: Number
});

let activitySchema = new mongoose.Schema({
	creator: String,
	members: [String],
	category: String,
	subject: String,
	updated: { type: Date, default: Date.now },
	location: locationSchema  
});

// Instances of these models represent documents which can be saved and retrieved from our database.
//The first parameter is model name, the second argument is our schema.

let Activity = mongoose.model('activity', activitySchema)

module.exports = Activity
