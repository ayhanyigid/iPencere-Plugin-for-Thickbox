iPencere Example
================

How to use with ajax?


$.fn.iPencere({
        TextHtml: '<img src="loading.gif">'+'<p>Loading.. Please wait.</p>',
        Init: function(){
        $.ajax({
        	type: "POST", // or GET
            	timeout:300,
            	url: "HERE AJAX URL", // http://example.com/ajax_request_url
            	dataType: 'json', // or HTML
            	data: $('#iform_id').serialize(), // This is your form id
            	success: function(d) {
            		$.fn.iPencere({ Close: true });
            		// if request is successful so close iPencere window
            	}
        	});
        }
});
