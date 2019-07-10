// This is a route file to facilitate multiple pages.
// This file defines the routes of our application.


// next-routes is the library.
const routes = require('next-routes')();

 routes
    // Form to make a record
   .add('/records/new', '/records/new')

   // record details for record at the "address"
   .add('/records/:address', '/records/show')

   // Requests for record at the "address"
   .add('/records/:address/requests', '/records/requests/index')
   
   // Form to create a request for record at the "address"
   .add('/records/:address/requests/new', '/records/requests/new');

module.exports = routes;


// List of records
// localhost:3000/
