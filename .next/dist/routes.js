'use strict';

// This is a route file to facilitate multiple pages

var routes = require('next-routes')();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFFQSxJQUFNLFNBQVMsQUFBZjs7QUFFQztBQUNHLEFBREg7Q0FFRyxBQUZILElBRU8sQUFGUCxrQkFFeUIsQUFGekI7QUFHRSxBQUhGO0NBSUcsQUFKSCxJQUlPLEFBSlAsdUJBSThCLEFBSjlCO0FBS0UsQUFMRjtDQU1HLEFBTkgsSUFNTyxBQU5QLGdDQU11QyxBQU52QztBQU9FLEFBUEY7Q0FRRyxBQVJILElBUU8sQUFSUCxvQ0FRMkMsQUFSM0M7O0FBVUQsT0FBTyxBQUFQLFVBQWlCLEFBQWpCOztBQUdBO0FBQ0EiLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6IkQ6L3JlYWN0L2tpY2tzdGFydC9TaG1hcnQifQ==