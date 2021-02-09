const mongoose = require('mongoose');

const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

mongoose.connect('mongodb://localhost/users_test', options);
mongoose.connection
	.once('open', () => console.log('Good to go!'))
	.on('error', (error) => {
		console.warn('Warning', error);
	});

beforeEach(() => {
	mongoose.connection.collections.users.drop();
});
