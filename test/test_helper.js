const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

mongoose.connect('mongodb://localhost/users_test', options);
mongoose.connection
	.once('open', () => {})
	.on('error', (error) => {
		console.warn('Warning', error);
	});

beforeEach((done) => {
	mongoose.connection.collections.users.drop(() => {
		// Ready to run the next test!
		done();
	});
});
