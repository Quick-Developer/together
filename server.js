var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/spacebookDB', function () {
//   console.log("DB connection established!!!");
// })
const SERVER_PORT = 8000;

var Activity = require('./models/togetherModel');

var firstActivity = new Activity ({
  creator: "yehuda",
  members: ['ron', 'avi'],
  category: 'football',
  subject:  'play',
  updated: '12/10/1990',
  location: {
    lng: 66,
    lat: 456
  } 
});

var secendActivity = new Activity ({
  creator: "yehuda",
  members: ['ron', 'avi'],
  category: 'football',
  subject:  'play',
  updated: '12/10/1990',
  location: {
    lng: 66,
    lat: 456
  } 
});

var thirdActivity = new Activity ({
  creator: "yehuda",
  members: ['ron', 'avi'],
  category: 'chess',
  subject:  'play',
  updated: '12/10/1990',
  location: {
    lng: 66,
    lat: 456
  } 
});

var fourthActivity = new Activity ({
  creator: "yehuda",
  members: ['ron', 'avi'],
  category: 'chess',
  subject:  'training', 
  updated: '12/10/1990',
  location: {
    lng: 66,
    lat: 456
  } 
});

/*

Book.create({
  numberOfPages: 22,
  author: {
    name: "Joe",
    height: 156
  }
}, function(err, data) {
  if (err) {
    return console.error(err)
  }
  console.log(data)
})


aPost.save(function(err, data) {
  if (err) {
    console.error(err);
  } else {
    console.error(data);
  }
});


Person.findOneAndUpdate({ age: 25 }, { firstName: 'Paul' }, function(err, person) {
  if (err) throw err;
  else console.log(person);
});
aPost.save(function(err, data){...})*/



firstActivity.save();
secendActivity.save();
thirdActivity.save();
fourthActivity.save();


var app = express();
app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// You will need to create 5 server routes
// These will define your API:

// 1) to handle getting all posts and their comments
/* app.get('/loadAllPosts', (request, response) => {
  Post.find({}).populate('text, comments').exec(function (error, posts) {
    if (error) {
      return console.error(error);
    } else {
      response.send(posts);
    }
  });
});

// 2) to handle adding a post
app.post('/addPost', (request, response) => {
  let postObj = new Post({
    text: request.body.text,
    comments: []
  })
 postObj.save();
  response.send(postObj);
});

// 3) to handle deleting a post
app.delete('/deletePost/:postId', (request, response) => {
  let postId = request.params.postId;
  Post.findByIdAndRemove(postId, (err, removedPost) => {
    if (err) {
      console.log(err);
    } else {
      response.send(removedPost);
    }
  });
});
// 4) to handle adding a comment to a post
app.post('/post/:postId/AddComment', (request, response) => {  
  let postId = request.params.postId;
  Post.findByIdAndUpdate(postId, { $push: { comments: request.body } }, { new: true }, (err, updatedPost) => {
    if (err) {
      console.log(err);
    } else {
      response.send(updatedPost);
    }
  });
});

// 5) to handle deleting a comment from a post
app.delete('/post/:postId/deleteComment/:commentId', (request, response) => {
  let postId = request.params.postId;
  let commentId = request.params.commentId;
  Post.findByIdAndUpdate(postId, { $pull: { comments: { _id: commentId } } }, { new: true }, (err, updatedComment) => {
    if (err) {
      console.log(err);
    } else {
      response.send(updatedComment);
    }
  });
}); */

  app.listen(SERVER_PORT, () => {
    console.log("Server started on port " + SERVER_PORT);
  });




