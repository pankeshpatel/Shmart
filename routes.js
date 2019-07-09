// This is a route file to facilitate multiple pages

const routes = require('next-routes')();

 routes
    // Form to make a campaign
   .add('/campaigns/new', '/campaigns/new')
   // Campaign details for campaign at the "address"
   .add('/campaigns/:address', '/campaigns/show')
   // Requests for campaign at the "address"
   .add('/campaigns/:address/requests', '/campaigns/requests/index')
   // Form to create a request for campaign at the "address"
   .add('/campaigns/:address/requests/new', '/campaigns/requests/new');

module.exports = routes;


// List of campaigns
// localhost:3000/
