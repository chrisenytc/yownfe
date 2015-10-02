'use strict';

function sayHello(msg, abl) {
	console.log('Hello ' + msg + ' ready to ' + abl + '?');
}

<% _.forEach(people, function(person) { %>
sayHello('<%= person.name %>', '<%= person.capabilities %>');
<% }); %>
