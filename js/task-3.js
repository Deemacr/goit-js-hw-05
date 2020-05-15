class Storage {
	constructor(items) {
		this.items = items;
	};
	getItems() {
		console.log(this.items);
	};
	addItem(item) {
		if (!this.items.includes(item)) {
			return this.items.push(item);
		} else {
			return console.log(`There is already ${item} item in Storage`);
		}
	};
	removeItem(item) {
		if (this.items.includes(item)) {
			return this.items.splice(this.items.indexOf(item), 1)
		} else {
			return console.log(`There is no ${item} item in Storage`);
		}
	}
};


const storage = new Storage([
	'Нанитоиды',
	'Пролонгер',
	'Железные жупи',
	'Антигравитатор',
]);

const items = storage.getItems();
// console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]
// storage.addItem('Дроид');

storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
// storage.removeItem('Лонгер')