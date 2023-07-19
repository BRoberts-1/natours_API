// What is express?

// Express is a minimal node.js 'framework' written on top of node.js using node.js(a higher level of abstraction)
// It is most popular framework for node.js
// Contains a very robust set of features such as: complex routing, easier handling of requests and responses, middleware, server-side rendering etc.
// Allows for rapic development of node.js application so we don't have to constantly be rewriting/reinventing the wheel.
// Express makes it easier to organize our code in the MVC(Model-View-Controller) architecture.

// It is conventional to have all express configuration in app.js
// const express = require('express');

// We create a variable called app and assign express to it. This is standard. express() is function which will add a bunch of functions saved in our 'app' variable.
// const app = express();

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

// app.get('/', (req, res) => {
//   res.status(200).json({ message: "Yayyy, it's working!!", app: 'Natours' });
// });

// We can also set up an http POST method:
// Running it in postman gives us our message and a default 200 status code even without us specifying it in our code.
// app.post('/', (req, res) => {
//   res.send('You can post to this endpoint...');
// });

// const port = 3000;
// app.listen(port, () => {
//   console.log(`App running on port ${port}...`);
// });

// Section 51 - APIs and RESTful API Design

// API - Application Programming Interface is a piece of software that can be used by another piece of software, in order to allow applications to talk to each other.

// The 'Application' can be other things no just web APIS:
// Node.js modules: fs or http are APIs(called 'node APIs')
// Browser's DOM and browser methods for DOM manipulation are APIs(JavaScript APIs, Google APIs)
// With OOP, when exposing methods to public, we're creating an API. We are giving other software the option of interacting with our software, in this case the objects the methods are attached to.

// The REST architecture - Representational State Transfer
// It is a way to build a web API that makes it easy for others to consume.(make it smooth for others).

// REST API are built like this:
// 1) Seperate API into logical resources.
// 2) Expose structured, resource-based URLs.
// 3) We use HTTP methods(GET, POST, PUT, DELETE)
// 4) We send data as JSON(usually)
// 5) REST APIs must be stateless

// We will go through each one seperately:

// 1) Seperate API into logical resources:

// The key abstraction in REST is Resources. All data we want to share in API should be divided into logical resources.
// What is a resource?
// An object or representaion of s.t. which has some data associated with it.
// E.g. in our Natours project; tours, users, reviews are all resources.
// It is any info. that can be named, but not a verb as in HTTP methods.

// 2) Expose structured, resource-based URLs:

// We need to expose(i.e. to make available) the data using some structured URLs that the client can send requests to. E.g. https://www.natours.com/addNewTour Here the /addNewTour is an endpoint. More examples: /getTour /updateTour /deleteTour /getToursByUser /deleteToursByUser
// Each of these will send different data back to client or perform different actions on behalf of the client.
// However, the above examples are WRONG because they should only contain the resources and NOT the actions you can perform on the resources because that would be a nightmare to maintain.
// To fix these endpoints we will look at /getTour. We want to get all the tours available, so we will change this to jsut /tours and make a GET request whenever there is a client request to access this endpoint. The verbs then stay with the HTTP methods.

// *It is a common convention to use the resource name in plural e.g. tours instead of tour.* This is because we usually want all the tours and not just one, but if we do filter for just one tour, then we add the tour id or some other unique identifier e.g. /tours/7. This is where Express really helps us.

// 3) We use HTTP methods(verbs):

// 5 Most Used HTTP methods:

// The GET method gives us a Read method on data.
// The POST method is used to Create something on the server i.e. to create new resources. This would change our above /addNewTour to just /tours. Here endpoint would be /tours (usually no identifier is needed because the server has other data to figure this out) as well. Just the HTTP method would not be the same. So POST comes in to server with request.
// The PUT and PATCH methods are used to update. So for our previous URL /updateTour we would use /tours/7 with thes methods. The difference with PUT and PATCH is that PUT is supposed to send the entire updated object to update, while PATCH is only supposed to send the specific part of the object that has been changed. Both have the ability to send info. to the server. Similar to POST, but with a different intent.
// The DELETE method is used to delete some resource. Needs unique identifier e.g. /tours/7 and also authentication where user needs to be logged into profile.

// These methods allow the client perform the basic 4 CRUD operations for APIS and Databases:
// CRUD - Create, Read, Update, Delete

// Actions which are not under CRUD could be logging in, searching etc. These are not related to a particular resource either, but we will use an endpoint for these as well e.g. /login or /search.

// For the special resources from above like /getToursByUser or /deleteToursByUser we would just use /useres/3/tours and /users/3/tours/9 respectively. For URL endpoints just have to have the unique identifier for the user and the tour. This is combining resources. It is important to build nicely structure URLs that are easy and logical to consume for the client.

// 4) We send data as JSON(typically):

// Usually we are using the JSON data format to send data to the client or to the server.
// What is JSON?
// A lightweight data interchange format that is language agnostic and used by web APIs.
// It looks like a JS object, but there are differnces. The key difference is that the 'keys' from the key/value pairs have to be strings. The values can be string, numbers, boolean values, other objects, or even arrays of objects etc.

// Response formatting:
// When sending a response usually it is slightly formatted using JSend which adds a 'status': 'success' message or s.t. similar and a 'data' key which contains the rest of the object as a value.(It becomes an object within an object aka a nested object.) This is called 'enveloping' where you wrap the data in an additional object. It helps mitigate some security issues and other problems.

// There are other 'response formatters' besides JSend,  e.g. JSOPN:API and OData JSON Protocol.

// 5) REST APIs must be 'stateless':

// Stateless RESTful API: All state( a piece of data that might change e.g. whether a user is logged in or e.g. what current page is when there are several pages etc.) is handled on the client side. This means that each request must contain all the info. necessary to process a certain request. The server should not have to store i.e. remember previous requests.
// An example would be the currentPage = 5 and we want to go to the next page of the tours so, GET /tours/nextPage request is sent to the server where the server keeps track of the current page and then sends the nextPage. This is not RESTful.
// To make this RESTful the client should send a request with the current page details  e.g. GET /tours/page/6 (has identfied page 6) and just increment that number in the request for the next page and the server will just send the next page back.
// Statefulness and Statelessness are important concepts in CS to understand.

// Section 52 - Starting to implement our routing for our API: Handling GET Requests

const fs = require('fs');
const express = require('express');

const app = express();

// app.get('/', (req, res) => {
//   res.status(200).json({ message: "Yayyy, it's working!!", app: 'Natours' });
// });

// app.post('/', (req, res) => {
//   res.send('You can post to this endpoint...');
// });

// Good practice to put API version number in URL, just in case you make changes you can then branch another version and the old one will still work for users. You could also put it in a subdomain, but it is easier to just include it in the URL.

// The 'route-handler' is the callback function with the args ('req', 'res')

// For our first route endpoint URL we just want to send back all the tours when a request is made. Where does this data come from? From our folder called /dev-data/data/tours-simple.json. It contains an array of JSON data, all related to the tours.
// Before sending the data, we need to read it. We will do this synchronously. We do this before the 'route-handler'. We save the value to a variable 'tours'.
// We will use JSON.parse to convert our JSON to array of JS objects.
// Then we(the server) send it back to the client.
// We should always include a status code.
// Another property that is good to include is results: tours.length because it is an array of objects. If it was just one object we wouldn't do this. It tells us how many objects are included in array.
// This is a file based API, eventually it will be a Database API.
// We must include the core module 'fs' at the top.

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      tours: tours,
    },
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
