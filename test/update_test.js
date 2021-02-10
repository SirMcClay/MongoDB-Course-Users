const assert = require('assert');
const User = require('../src/user');

describe('Updating records', () => {
	let joe;

	beforeEach((done) => {
		joe = new User({ name: 'Joe' });
		joe.save().then(() => done());
	});

	function assertName(operation, done) {
		operation
			.then(() => User.find({}))
			.then((users) => {
				assert(users.length === 1);
				assert(users[0].name === 'Alex');
				done();
			});
	}

	it('instance type using set and save', (done) => {
		joe.set('name', 'Alex');
		assertName(joe.save(), done);
	});

	it('a model instance can update', (done) => {
		assertName(joe.updateOne({ name: 'Alex' }), done); // update is deprecated using updateOne
	});

	it('a model class can update', (done) => {});

	it('a model class can update one record', (done) => {});

	it('a model class can find a record with an Id and update', (done) => {});
});
