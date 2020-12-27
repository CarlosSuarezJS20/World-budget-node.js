# Read Me

> This read.me file intends to explain the main fundamentals and approaches I undertook during the development of this project.

---

### Table of Contents

- [Description ](#description)
- [Technologies and Dependencies](#technologies-and-dependencies)
- [License](#license)
- [Author Info](#author-info)

---

## Description

Budget world is a prototype powered by JavaScript. The web-app idea was born due to my love for travelling and the challenges I explored when adventuring in a new country. This web-app helps travellers to budget their trip, taking into account different categories and items uploaded by other users.

This web app was the first attemp to build a fully functional app that I emerged to React.js

### Capabilities

- Log in and Log out
- Add, Update and Remove
- Local storage
- Multiple dimension filtering
- css responsive
- Keyword Enter responsive
- Fully Hosted

## Technologies and Dependencies

- JavaScript (Object-Orientated-Programming)
- CSS
- HTML
- Node.js (express, express-flash)
- ejs
- bcrypt (Authentication)
- Heroku (server)
- passport

Some of the practice opporunities and new learnings:

- Node.js fundamentals, get/post/seasons
- ejs message handling
- forms and database handling
- DOM elements manipulation
- If statements and array handling

[Back To The Top](#read-me)

### Highlight coding learning - Filter snipped example

Filtering with multiple categories

```
const filteredItems = (countryValue, searchCategory) => {
	if (countryValue && searchCategory) {
		return items.filter(
			(item) =>
				item.country === countryValue && item.category === searchCategory
		);
	}
	if (countryValue) {
		return items.filter((item) => item.country === countryValue);
	}

	return items.filter((item) => item.category === searchCategory);
};
```

---

## License

MIT License

Copyright (c) [2020] [Carlos Suarez]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PUxwPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

[Back To The Top](#read-me)

---

## Author Info

- LinkedIn - [Link](https://www.linkedin.com/in/carlos-suarez-msc-a3659141/)
- Website - [my-portfolioweb](https://my-portfolio-27903.web.app/portfolio/)

[Back To The Top](#read-me)
