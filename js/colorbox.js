createIframe22222 = function() {
	var iframe = document.createElement('iframe');
	var attrs = $(this).data('cbox-iframe-attrs');

	if (typeof attrs === 'object') {
		$.each(attrs, function(key, val){
			iframe[key] = val;
		});
	}

	if ('frameBorder' in iframe) {
		iframe.frameBorder = 0;
	}
	if ('allowTransparency' in iframe) {
		iframe.allowTransparency = "true";
	}
	iframe.name = (new Date()).getTime(); // give the iframe a unique name to prevent caching
	iframe.allowFullscreen = true;

	return iframe;
}
