/**
 * Main JS file for Casper behaviours
 */

/* globals jQuery, document */
(function ($, sr, undefined) {
    "use strict";

    var $document = $(document);

$document.ready(function () {
	var schema = {
    type : "object",
    properties : {
        id : {
            type : "integer"
        },
        username : {
            type: "string",
            minLength: 10,
            maxLength: 10
        },
        password : {
            type: "string",
            minLength: 6,
            maxLength: 6
        }
    }
};

apitizer.addSchema('user', schema);

var store = apitizer.schemaStore('user', 5, {
    id : apitizer.types.autoincrement()
});
apitizer.fixture.resource('/users', store);
apitizer.start() 

/*  $.mockjax({
  url: '/restful/fortune',
  responseTime: 750,
  responseText: {
    status: 'success',
    fortune: ' #'+Math.random()+' !'
  }
});
  $.getJSON('/restful/fortune', function(response) {
  if ( response.status == 'success') {
    $('#fortune').html( 'Mockjax random response: ' + response.fortune );
  } else {
    $('#fortune').html( 'Things do not look good, no response was told' );
  }
});*/

$.get('/users').then(function(response) {
	console.log("Get users")
	console.log(response)
});


    });
})(jQuery);

