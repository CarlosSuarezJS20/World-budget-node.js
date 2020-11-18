const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const bcrypt = require('bcrypt');
const passport = require('passport');
const initializePassword = require('./passport');
const eFlash = require('express-flash');
const eSession = require('express-session');
const methodOv = require('method-override');

const users = [];

initializePassword(
	(email) => users.find((user) => user.email === email),
	(id) => users.find((user) => user.id === id)
);

const publicDirectory = path.join(__dirname, './public');

app.set('view-engine', 'ejs');
app.use(express.static(publicDirectory));
app.use(express.urlencoded({ extended: false }));
app.use(eFlash());
app.use(
	eSession({
		secret: process.env.SESSION_SECRET,
		resave: false,
		saveUninitialized: false,
	})
);
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOv('_method'));

const checkAuthentication = (req, res, next) => {
	if (!req.isAuthenticated()) {
		return res.redirect('/login');
	}

	return next();
};

app.get('/', (req, res) => {
	return res.render('index.ejs');
});

// app.get('/', checkAuthentication, (req, res) => {
// 	return res.render('index.ejs');
// });

const checkNotAuthenticated = (req, res, next) => {
	if (req.isAuthenticated()) {
		return res.redirect('/');
	}
	return next();
};

app.get('/login', checkNotAuthenticated, (req, res) => {
	res.render('login.ejs');
});

app.post(
	'/login',
	checkNotAuthenticated,
	passport.authenticate('local', {
		successRedirect: '/',
		failureRedirect: '/login',
		failureFlash: true,
	})
);

app.get('/register', checkNotAuthenticated, (req, res) => {
	res.render('register.ejs');
});

app.post('/register', checkNotAuthenticated, async (req, res) => {
	if (req.body.passport !== req.body.confirmed_password) {
		res.redirect('/register');

		return;
	}
	try {
		const hashedPassword = await bcrypt.hash(req.body.password, 10);
		users.push({
			id: Date.now().toString(),
			email: req.body.email,
			password: hashedPassword,
		});
		res.redirect('/login');
	} catch {
		res.redirect('/register');
	}
});

app.delete('/logout', (req, res) => {
	req.logOut();
	res.redirect('/login');
});

const port = process.env.PORT || 3001;
app.listen(port);
