'use strict';

// This is a route file to facilitate multiple pages.
// This file defines the routes of our application.

var routes = require('next-routes')();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBLElBQU0sU0FBUyxBQUFmOztBQUVDO0FBQ0csQUFESDtDQUVHLEFBRkgsSUFFTyxBQUZQLGdCQUV1QixBQUZ2Qjs7QUFJRSxBQUpGO0NBS0csQUFMSCxJQUtPLEFBTFAscUJBSzRCLEFBTDVCOztBQU9FLEFBUEY7Q0FRRyxBQVJILElBUU8sQUFSUCw4QkFRcUMsQUFSckM7O0FBVUUsQUFWRjtDQVdHLEFBWEgsSUFXTyxBQVhQLGtDQVd5QyxBQVh6Qzs7QUFhRCxPQUFPLEFBQVAsVUFBaUIsQUFBakI7O0FBR0E7QUFDQSIsImZpbGUiOiJyb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiRDovcmVhY3Qva2lja3N0YXJ0L1NobWFydCJ9