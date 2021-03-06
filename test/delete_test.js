const assert = require('assert');
const User = require('../src/user');

describe('Deleting a user', () => {
	let joe;

	beforeEach((done) => {
		joe = new User({ name: 'Joe' });
		joe.save().then(() => done());
	});

	it('model joe instance remove', (done) => {
		joe
			.remove()
			.then(() => User.findOne({ name: 'Joe' }))
			.then((user) => {
				assert(user === null);
				done();
			});
	});

	it('class User method remove', (done) => {
		User.deleteMany({ name: 'Joe' }) // .remove() was deprecated instead uses deleteMany() or deleteOne()
			.then(() => User.findOne({ name: 'Joe' }))
			.then((user) => {
				assert(user === null);
				done();
			});
	});

	it('class User method findAndRemove', (done) => {
		User.findOneAndDelete({ name: 'Joe' }) // .findOneAndRemove() was deprecated instead uses findOneAndDelete()
			.then(() => User.findOne({ name: 'Joe' }))
			.then((user) => {
				assert(user === null);
				done();
			});
	});

	it('class User method findByIdAndRemove', (done) => {
		User.findByIdAndDelete(joe._id) // .findByIdAndRemove() was deprecated instead uses findByIdAndDelete()
			.then(() => User.findOne({ name: 'Joe' }))
			.then((user) => {
				assert(user === null);
				done();
			});
	});
});
