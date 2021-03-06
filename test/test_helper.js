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
	const { users, comments, blogposts } = mongoose.connection.collections;
	users.drop(() => {
		comments.drop(() => {
			blogposts.drop(() => {
				done();
			});
		});
	});
});
