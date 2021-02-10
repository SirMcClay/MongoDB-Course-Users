const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

before((done) => {
	const options = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
	};

	mongoose.connect('mongodb://localhost/users_test', options);
	mongoose.connection
		.once('open', () => {
			done();
		})
		.on('error', (error) => {
			console.warn('Warning', error);
		});
});

beforeEach((done) => {
	mongoose.connection.collections.users.drop(() => {
		// Ready to run the next test!
		done();
	});
});
