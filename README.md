iPencere
========

How to use ?


$.fn.iPencere({
        TextHtml: '<img src="loading.gif">'+'<p>Loading.. Please wait.</p>',
        Init: function(){
        $.ajax({
        		type: "POST",
            	timeout:30000,
            	url: "HERE AJAX URL",
            	dataType: 'json',
            	data: $('#iform_id').serialize(),
            	success: function(d) {
            		$.fn.iPencere({ Close: true });
            	}
        	});
        }
});
