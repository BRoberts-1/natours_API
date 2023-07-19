// What is express?

// Express is a minimal node.js 'framework' written on top of node.js using node.js(a higher level of abstraction)
// It is most popular framework for node.js
// Contains a very robust set of features such as: complex routing, easier handling of requests and responses, middleware, server-side rendering etc.
// Allows for rapic development of node.js application so we don't have to constantly be rewriting/reinventing the wheel.
// Express makes it easier to organize our code in the MVC(Model-View-Controller) architecture.

// It is conventional to have all express configuration in app.js
const express = require('express');
// We create a variable called app and assign express to it. This is standard. express() is function which will add a bunch of functions saved in our 'app' variable.
const app = express();

// We will start up a server with app.listen();
// This is similar to what we did with the 'http' package from node.js.
// Similarly, we must pass in the port we will use for our server. We will save it to variable 'port'. We pass in port as arg, and our callback function. We will put a simple console.log.

// const port = 3000;
// app.listen(port, () => {
//   console.log(`App running on port ${port}...`);
// });

// Now that we have our server up and listening, we need to set up some routing. Routing is how our server responds to a particular client-request. This includes not only the URL, but the http method(GET, POST, PUT, DELETE) that is used for that URL. We will use the root of the URL address with ('/')
// We then need to specify in our callback function what we want to happen with the client request from that URL. We need two args: req, res(these are objects) in our callback function.
// Node.js and Express are all about 'requests' and 'responses'.
// Here we will just send some data back using the res.send() method.
// We can also specify our 'status code' by using the .status() method and putting our code inside. It goes before the .send() method. 200 for OK.

// We will test API using Postman app. Just write IP for localhost with port(127.0.0.1:3000) into GET on postman app.
// We can also use the .json() method and send an object(we write our string data as an object) instead of the .send() method. Then in postman we will see our object converted to JSON when calling GET.
// Using the .json() method automatically sets our content type to JSON in our header. Can check headers in postman.

app.get('/', (req, res) => {
  res.status(200).json({ message: "Yayyy, it's working!!", app: 'Natours' });
});

// We can also set up an http POST method:
// Running it in postman gives us our message and a default 200 status code even without us specifying it in our code.
app.post('/', (req, res) => {
  res.send('You can post to this endpoint...');
});

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
