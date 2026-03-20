const ballerina = {
	commonName: 'Spanish lavender',
	scientificName: 'Lavandula stoechas',
	cultivar: 'Ballerina',
};

const prettyPolly = {
	commonName: 'Spanish lavender',
	scientificName: 'Lavandula stoechas',
	cultivar: 'Pretty Polly',
};

const willowVale = {
	commonName: 'Spanish lavender',
	scientificName: 'Lavandula stoechas',
	cultivar: 'Willow Vale',
};

const hidcote = {
	commonName: 'English lavender',
	scientificName: 'Lavandula angustifolia',
	cultivar: 'Hidcote',
};

const imperialGem = {
	commonName: 'English lavender',
	scientificName: 'Lavandula angustifolia',
	cultivar: 'Imperial Gem',
};

const royalCrown = {
	commonName: 'French lavender',
	scientificName: 'Lavandula dentata',
	cultivar: 'Royal Crown',
};

const catalog = new Map();
catalog.set(ballerina, { small: 20, medium: 15, large: 12 });
catalog.set(prettyPolly, { small: 31, medium: 14, large: 24 });
catalog.set(willowVale, { small: 3, medium: 5, large: 0 });
catalog.set(hidcote, { small: 33, medium: 13, large: 18 });
catalog.set(imperialGem, { small: 19, medium: 35, large: 28 });
catalog.set(royalCrown, { small: 40, medium: 22, large: 9 });

console.log(catalog);
const getBallerina = catalog.get(ballerina);
console.log(getBallerina);
getBallerina.small = 18;

const sellPlants = (plantObj, potSize, potsNum) => {
	const plant = catalog.get(plantObj);

	console.log(plant[potSize]);

	if (potsNum > plant[potSize]) {
		return `Not enough ${potSize} size pots for ${plantObj.scientificName} '${plantObj.cultivar}'. Only ${plant[potSize]} left.`;
	}
};

console.log(sellPlants(ballerina, 'small', 25));
console.log(catalog);
