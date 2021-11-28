var ghpages = require('gh-pages');

// Build File Deploy
ghpages.publish('../dist', function(err) {
	if(err) console.log(error);
	else{
		console.log('added /dist');
		console.log('Deploying gh-pages');
	}
});
