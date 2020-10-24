const PassportStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const initializePassword = (passport, getUserByEmail, getUserById) => {
	const userAuthetication = async (email, password, done) => {
		const user = getUserByEmail(email);
		if (!user) {
			return done(null, false, { message: `No User Found` });
			// first parameter returns an error, but we are using local storage...
		}

		try {
			if (!(await bcrypt.compare(password, user.password))) {
				return done(null, false, { message: 'Password incorrect' });
			} else {
				return done(null, user);
			}
		} catch (error) {
			return done(error);
		}
	};

	passport.use(
		new PassportStrategy({ usernameField: 'email' }, userAuthetication)
	);
	passport.serializeUser((user, done) => done(null, user.id));
	passport.deserializeUser((id, done) => {
		return done(null, getUserById(id));
	});
};

module.exports = initializePassword;
