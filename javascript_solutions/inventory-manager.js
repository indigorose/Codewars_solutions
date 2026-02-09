const inventory = [];

function findProductIndex(productName) {
	return inventory.findIndex(
		(product) => product.name.toLowerCase() === productName.toLowerCase(),
	);
}

// console.log(findProductIndex('FloUr'));

function addProduct(product) {
	const productIndex = findProductIndex(product.name.toLowerCase());

	if (productIndex === -1) {
		inventory.push({
			name: product.name.toLowerCase(),
			quantity: product.quantity,
		});
		console.log(`${product.name.toLowerCase()} added to inventory`);
	} else {
		inventory[productIndex].quantity += product.quantity;
		console.log(`${product.name.toLowerCase()} quantity updated`);
	}
}

// console.log(addProduct({ name: 'FLOUR', quantity: 5 }));
// console.log(inventory);

function removeProduct(productName, productQuantity) {
	const productIndex = findProductIndex(productName.toLowerCase());

	if (productIndex === -1) {
		console.log(`${productName.toLowerCase()} not found`);
		return;
	} else {
		if (inventory[productIndex].quantity < productQuantity) {
			console.log(
				`Not enough ${productName.toLowerCase()} available, remaining pieces: ${inventory[productIndex].quantity}`,
			);
		} else if (inventory[productIndex].quantity === productQuantity) {
			inventory.splice(productIndex, 1);
			return console.log(`${productName.toLowerCase()} not found`);
		} else {
			inventory[productIndex].quantity -= productQuantity;
			console.log(
				`Remaining ${productName.toLowerCase()} pieces: ${inventory[productIndex].quantity}`,
			);
		}
	}
}

removeProduct('FLOUR', 10);

// inventory.length = 0;
// inventory.push({ name: 'flour', quantity: 15 });
// inventory.push({ name: 'rice', quantity: 10 });
// inventory.push({ name: 'sugar', quantity: 5 });
// console.log('actual:');
// removeProduct('Flour', 5);
// console.log('expected:');
// console.log('Remaining flour pieces: 10');
// console.log('\nactual:');
// removeProduct('RICE', 5);
// console.log('expected:');
// console.log('Remaining rice pieces: 5');
// console.log('\nactual:');
// removeProduct('Sugar', 2);
// console.log('expected:');
// console.log('Remaining sugar pieces: 3');
