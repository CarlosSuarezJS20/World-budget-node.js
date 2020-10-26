//ADD AN ITEM SELECTORS
const showFormItemBtn = document.getElementById('show-form');
const addItem = document.querySelector('.add-new-card');
const addCardForm = document.getElementById('add-form');
const descriptionInputEl = document.getElementById('item-description');
const typeOfItemInputEl = document.getElementById('type-input');
const remainingCharactersEl = document.getElementById('max-lenght-count');

// buttons selectors Add An Item Form
const cancelBtnAccess = document.getElementById('form-cancel-btn');
const addItemBtnAccess = document.getElementById('add-new-btn');

// SEARCH CAPABILITY SELECTORS
const countryFilterAccess = document.getElementById('country-filter');
const searchBtnAccess = document.getElementById('search-btn');
const itemElements = document.getElementById('cards-hook').children;
// Search Info from USER
const searchCategoryMenu = document.getElementById('type-of-item');

const items = [
	{
		id: Math.random().toFixed(5),
		itemTitle: 'Pad Thai',
		imageUrl:
			'https://www.2foodtrippers.com/wp-content/uploads/2016/08/Delicious-Thai-Food-Pad-Thai.jpg.webp',
		country: 'THAILAND',
		price: 5,
		description: 'Street food in Bankok',
		category: 'Food/Beverage',
	},
	{
		id: Math.random().toFixed(5),
		itemTitle: 'Canned coffee',
		imageUrl:
			'https://331mrnu3ylm2k3db3s1xd1hg-wpengine.netdna-ssl.com/wp-content/uploads/2015/08/Sprudge-VendingMachineCoffee-KateBeard-sprudgevending-3-740x493.jpg',
		country: 'JAPAN',
		price: 3.5,
		description: 'Had to have one of this in Tokyo',
		category: 'Food/Beverage',
	},
	{
		id: Math.random().toFixed(5),
		itemTitle: 'Scooter day rental',
		imageUrl:
			'https://anomadsdream.com/wp-content/uploads/2013/05/SAM_1859.jpg',
		country: 'THAILAND',
		price: 7.5,
		description:
			'Cheap rental bike, Ko Thao. This is average price around Thailand',
		category: 'Transport',
	},
	{
		id: Math.random().toFixed(5),
		itemTitle: 'Bottle of Water Price',
		imageUrl:
			'https://2reb5l2d3joj3y7m8y2f5ptbefc-wpengine.netdna-ssl.com/order/files/2017/11/B1.jpg',
		country: 'THAILAND',
		price: 5,
		description: 'Street food Pad Thai',
		category: 'Food/Beverage',
	},
	{
		id: Math.random().toFixed(5),
		itemTitle: 'Gold Ice Cream',
		imageUrl:
			'https://kaname-inn.com/wp/wp-content/uploads/2018/05/IMG_4388_11.jpg',
		country: 'JAPAN',
		price: 5,
		description: 'Delicious golden ice cream in Kyoto',
		category: 'Food/Beverage',
	},
	{
		id: Math.random().toFixed(5),
		itemTitle: 'Buddah bracelet',
		imageUrl:
			'https://c7.alamy.com/comp/M8XGMD/seoul-south-korea-march-6-2018-buddhist-bracelet-on-shop-at-jogyesa-M8XGMD.jpg',
		country: 'JAPAN',
		price: 5,
		description: 'Bought this while street shopping in Seoul',
		category: 'Souvenirs',
	},
	{
		id: Math.random().toFixed(5),
		itemTitle: 'Suvarnabhumi Taxi',
		imageUrl:
			'https://static.bangkokpost.com/media/content/20160507/c1_962249_160507092902.jpg',
		country: 'THAILAND',
		price: 5,
		description: 'Taxi from the center Bankok',
		category: 'Transport',
	},
	{
		id: Math.random().toFixed(5),
		itemTitle: 'Vietnamese Coffee',
		imageUrl:
			'https://thewoksoflife.com/wp-content/uploads/2017/12/vietnamese-coffee-7.jpg',
		country: 'VIETNAM',
		price: 3.5,
		description: 'Delicious! prices change but this is the average',
		category: 'Food/Beverage',
	},
	{
		id: Math.random().toFixed(5),
		itemTitle: 'Islas Del Rosario',
		imageUrl:
			'http://img.theculturetrip.com/1440x807/smart/wp-content/uploads/2018/01/shutterstock_771163747.jpg',
		country: 'COLOMBIA',
		price: 3.5,
		description:
			'Great visits, price includes return ticket, welcome drink and lunch',
		category: 'Activity',
	},
	{
		id: Math.random().toFixed(5),
		itemTitle: 'Bandeja Paisa',
		imageUrl:
			'https://www.cocina-colombiana.com/base/stock/Recipe/232-image/232-image_web.jpg',
		country: 'COLOMBIA',
		price: 10,
		description: 'Had this delicious ditch during my stay in Medellin.',
		category: 'Food/Beverage',
	},
];

//
//

// NAVBAR SEARCH CAPABILITY

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

const addCancelFilterBtn = () => {
	const cancelBtn = document.createElement('button');
	cancelBtn.textContent = 'Cancel Search';
	cancelBtn.id = 'cancel-search-btn';
	cancelBtn.className = 'btn';
	document.querySelector('.search-btn').append(cancelBtn);
	cancelBtn.addEventListener('click', () => {
		for (let el of itemElements) {
			el.style.display = '';
		}
		countryFilterAccess.value = '';
		searchCategoryMenu.value = '';
		document.getElementById(cancelBtn.id).remove();
	});
};

const searchBtnHandler = () => {
	let countryValue = countryFilterAccess.value.trim().toUpperCase();
	let searchCategory = searchCategoryMenu.value.trim();
	if (countryValue === '' && searchCategory === '') {
		return;
	}
	console.log(countryValue, searchCategory);
	const results = filteredItems(countryValue, searchCategory);

	if (results.length === 0) {
		alert(`Not Items Found :(, Please Try Again`);
	} else {
		for (let el of itemElements) {
			el.style.display = 'none';
		}
		results.forEach((result) => {
			document.getElementById(result.id).style.display = 'grid';
		});
		if (!document.getElementById('cancel-search-btn')) {
			addCancelFilterBtn();
		} else {
			return;
		}
	}
};

// ========== FORM ADD AN ITEM HANDLER ================
const addItemHandler = () => {
	const itemTitleInput = document.getElementById('title').value;
	const imageInput = document.getElementById('image-url').value;
	const countryInput = document.getElementById('country-input').value;
	const priceInput = document.getElementById('price-input').value;
	const descriptionInput = descriptionInputEl.value;
	const typeOfItemInput = typeOfItemInputEl.value;
	// validation
	if (
		itemTitleInput.trim() === '' ||
		imageInput.trim() === '' ||
		countryInput.trim() === '' ||
		priceInput.trim() === '' ||
		descriptionInput.trim() === '' ||
		typeOfItemInput === 'empty'
	) {
		alert('All fields must be provided and a category should be added!');
		return;
	}

	clearInputs();

	const newItem = {
		id: idGeneration.next().value.toString(),
		itemTitle: itemTitleInput,
		imageUrl: imageInput,
		country: countryInput.toUpperCase().trim(),
		price: +priceInput,
		description: descriptionInput,
		category: typeOfItemInput,
	};
	console.log(newItem);

	items.push(newItem);
	console.log(items);
	const newItemRender = new SingleItemRendering(newItem, 'cards-hook');
	newItemRender.render();
	addItem.classList.remove('show-add-card');
};

// const textAreaCharCount = (string) {

// }

// RENDER FOR ITEM
class SingleItemRendering {
	constructor(item, renderHook) {
		(this.item = item),
			(this.hookPosition = renderHook),
			(this.itemTemplateEl = document.getElementById('card-template'));
	}

	render() {
		const itemTemplateEl = document.importNode(
			this.itemTemplateEl.content,
			true
		);

		const itemEl = itemTemplateEl.querySelector('.card');
		itemEl.id = this.item.id;
		itemEl.querySelector('img').src = this.item.imageUrl;
		this.spans = itemEl.querySelectorAll('span');
		this.description = itemEl.querySelector('textarea');
		this.counterEl = itemEl.querySelector('h5');
		this.spans[0].textContent = this.item.itemTitle;
		this.spans[1].textContent = this.item.price;
		this.description.textContent = this.item.description;
		this.spans[2].textContent = this.item.category;
		this.spans[3].textContent = this.item.country;
		this.currentPrice = this.spans[1].textContent;
		this.currentDescription = this.description.textContent;

		this.editBtnAccess = itemEl.querySelectorAll('button');
		this.saveBtnAccess = this.editBtnAccess[0];
		const editBtnAccess = this.editBtnAccess[1];
		this.cancelBtnAccess = this.editBtnAccess[2];
		this.saveBtnAccess.addEventListener(
			'click',
			this.saveNewContent.bind(this)
		);
		editBtnAccess.addEventListener('click', this.editContent.bind(this));
		this.cancelBtnAccess.addEventListener('click', this.cancelEdit.bind(this));

		document.getElementById(this.hookPosition).append(itemEl);
	}

	saveNewContent() {
		this.spans[1].contentEditable = false;
		this.spans[1].classList.remove('editable');
		this.description.classList.remove('card-info-edit');
		this.cancelBtnAccess.style.display = 'none';
		this.saveBtnAccess.style.display = 'none';
		this.counterEl.style.display = 'none';
	}

	editContent() {
		this.spans[1].contentEditable = true;
		this.spans[1].classList.add('editable');
		this.description.classList.add('card-info-edit');
		this.saveBtnAccess.style.display = 'block';
		this.cancelBtnAccess.style.display = 'block';
		this.counterEl.style.display = 'block';
		this.counterEl.textContent = charactersCount(
			this.counterEl,
			this.description,
			100
		);
	}

	cancelEdit() {
		this.spans[1].contentEditable = false;
		this.spans[1].classList.remove('editable');
		this.saveBtnAccess.style.display = 'none';
		this.cancelBtnAccess.style.display = 'none';
		this.description.classList.remove('card-info-edit');
		this.spans[1].innerHTML = this.currentPrice;
		this.description.value = this.currentDescription;
		this.counterEl.style.display = 'none';
	}
}

// ======= UTILITY FUNCTIONS ==========
function* taskId() {
	let index = 0;
	while (true) {
		yield index++;
	}
}

const idGeneration = taskId();

// Clear Inputs from the form
const clearInputs = () => {
	const addFormEl = document
		.getElementById('add-form')
		.querySelectorAll('input');
	for (let input of addFormEl) {
		input.value = '';
	}
	descriptionInputEl.value = '';
	typeOfItemInputEl.value = 'empty';
};

// search on Enter
const filterInputs = [countryFilterAccess, searchCategoryMenu];
filterInputs.forEach((element) => {
	element.addEventListener('keyup', (event) => {
		if (event.keyCode === 13) {
			event.preventDefault();
			searchBtnAccess.click();
		}
	});
});

const charactersCount = (charactersEl, descriptionEl, textMaxLenght) => {
	const maxLenght = textMaxLenght;
	descriptionEl.addEventListener('input', () => {
		const remainingCharacters = maxLenght - descriptionEl.value.length;
		const textColor = remainingCharacters <= maxLenght * 0.1 ? 'red' : null;
		charactersEl.textContent = `${remainingCharacters} characters Remaining`;
		charactersEl.style.color = textColor;
	});
};

charactersCount(remainingCharactersEl, descriptionInputEl, 100);

// At the moment I'm instantiating this class to render the "items array", which contains some hardcored items
const renderDataBaseItems = () => {
	for (let item of items) {
		const newItem = new SingleItemRendering(item, 'cards-hook');
		newItem.render();
	}
};

renderDataBaseItems();

//BUTTONS HANDLERS
// AddBtn card
showFormItemBtn.addEventListener('click', () => {
	addItem.classList.add('show-add-card');
});
// card form btns
cancelBtnAccess.addEventListener('click', () => {
	addItem.classList.remove('show-add-card');
	clearInputs();
});
// add a new card
addItemBtnAccess.addEventListener('click', addItemHandler);
// search Navbar btn
searchBtnAccess.addEventListener('click', searchBtnHandler);
