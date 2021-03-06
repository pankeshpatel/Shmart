'use strict';

// This is a route file to facilitate multiple pages.
// This file defines the routes of our application.


// next-routes is the library.
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsicm91dGVzIiwicmVxdWlyZSIsImFkZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7O0FBR0E7QUFDQSxJQUFJQSxTQUFTQyx3QkFBYjs7QUFFQUQ7QUFDQTtBQURBLENBRUNFLEdBRkQsQ0FFSyxjQUZMLEVBRXFCLGNBRnJCOztBQUlBO0FBSkEsQ0FLQ0EsR0FMRCxDQUtLLG1CQUxMLEVBSzBCLGVBTDFCOztBQU9BO0FBUEEsQ0FRQ0EsR0FSRCxDQVFLLDRCQVJMLEVBUW1DLHlCQVJuQzs7QUFVQTtBQVZBLENBV0NBLEdBWEQsQ0FXSyxnQ0FYTCxFQVd1Qyx1QkFYdkM7O0FBYUFDLE9BQU9DLE9BQVAsR0FBaUJKLE1BQWpCOztBQUVBO0FBQ0EiLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgaXMgYSByb3V0ZSBmaWxlIHRvIGZhY2lsaXRhdGUgbXVsdGlwbGUgcGFnZXMuXG4vLyBUaGlzIGZpbGUgZGVmaW5lcyB0aGUgcm91dGVzIG9mIG91ciBhcHBsaWNhdGlvbi5cblxuXG4vLyBuZXh0LXJvdXRlcyBpcyB0aGUgbGlicmFyeS5cbnZhciByb3V0ZXMgPSByZXF1aXJlKCduZXh0LXJvdXRlcycpKCk7XG5cbnJvdXRlc1xuLy8gRm9ybSB0byBtYWtlIGEgcmVjb3JkXG4uYWRkKCcvcmVjb3Jkcy9uZXcnLCAnL3JlY29yZHMvbmV3JylcblxuLy8gcmVjb3JkIGRldGFpbHMgZm9yIHJlY29yZCBhdCB0aGUgXCJhZGRyZXNzXCJcbi5hZGQoJy9yZWNvcmRzLzphZGRyZXNzJywgJy9yZWNvcmRzL3Nob3cnKVxuXG4vLyBSZXF1ZXN0cyBmb3IgcmVjb3JkIGF0IHRoZSBcImFkZHJlc3NcIlxuLmFkZCgnL3JlY29yZHMvOmFkZHJlc3MvcmVxdWVzdHMnLCAnL3JlY29yZHMvcmVxdWVzdHMvaW5kZXgnKVxuXG4vLyBGb3JtIHRvIGNyZWF0ZSBhIHJlcXVlc3QgZm9yIHJlY29yZCBhdCB0aGUgXCJhZGRyZXNzXCJcbi5hZGQoJy9yZWNvcmRzLzphZGRyZXNzL3JlcXVlc3RzL25ldycsICcvcmVjb3Jkcy9yZXF1ZXN0cy9uZXcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXM7XG5cbi8vIExpc3Qgb2YgcmVjb3Jkc1xuLy8gbG9jYWxob3N0OjMwMDAvIl19
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsicm91dGVzIiwicmVxdWlyZSIsImFkZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7O0FBR0E7QUFDQSxJQUFJQSxTQUFTQyx3QkFBYjs7QUFFQUQ7QUFDQTtBQURBLENBRUNFLEdBRkQsQ0FFSyxjQUZMLEVBRXFCLGNBRnJCOztBQUlBO0FBSkEsQ0FLQ0EsR0FMRCxDQUtLLG1CQUxMLEVBSzBCLGVBTDFCOztBQU9BO0FBUEEsQ0FRQ0EsR0FSRCxDQVFLLDRCQVJMLEVBUW1DLHlCQVJuQzs7QUFVQTtBQVZBLENBV0NBLEdBWEQsQ0FXSyxnQ0FYTCxFQVd1Qyx1QkFYdkM7O0FBYUFDLE9BQU9DLE9BQVAsR0FBaUJKLE1BQWpCOztBQUVBO0FBQ0EiLCJmaWxlIjoidW5rbm93biJ9