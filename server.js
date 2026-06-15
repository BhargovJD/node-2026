// Import the Express framework.
// Express helps us create web servers easily.
const express = require('express')

// Create an Express application instance.
// The 'app' object will be used to define routes and start the server.
const app = express()

// Define a GET route for the root URL '/'.
// When someone visits http://localhost:3000/,
// this function will execute.
app.get('/', (req, res) => {

// Send a response back to the browser.
// The browser will display "Hello World".
res.send('Hello World')
})


app.get('/chicken', (req, res) => {
res.send('Hello Chicken')
})


// Route: GET /user
app.get('/user', (req, res) => {

// Send JSON response
res.json({
    id: 1,
    name: 'Bhargov',
    age: 30,
    city: 'Guwahati'
});

});



// Start the server and listen on port 3000.
// The callback function runs once the server starts successfully.
app.listen(3000, () => {

// Print a message in the terminal indicating
// that the server is running.
console.log('Server is running on http://localhost:3000')
})
