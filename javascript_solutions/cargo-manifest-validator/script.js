const testManifest = {
	containerId: 1,
	destination: 'Monterey, California, USA',
	weight: 831,
	unit: 'lb',
	hazmat: false,
};

const testCargo = {
	containerId: 68,
	destination: 'Salinas',
	weight: 101,
	unit: 'lb',
	hazmat: true,
};

const testValidate = {
	containerId: 1,
	destination: 'Santa Cruz',
	weight: 304,
	unit: 'kg',
	hazmat: false,
};

const testValidateTwo = {
	containerId: null,
	destination: 'Santa Cruz',
	weight: 304,
	unit: 'kg',
	hazmat: false,
};

const testValidateThree = {
	containerId: 0,
	destination: 405,
	weight: -84,
	unit: 'pounds',
	hazmat: 'no',
};

const testValidateFour = { containerId: -2 };

const testValidateFive = { containerId: 3.5 };

const testValidateSix = { destination: '  ' };

const testValidateSeven = { weight: NaN };

const testValidateEight = {};

function normalizeUnits(manifest) {
	if (manifest.unit === 'lb') {
		const updatedManifest = {
			...manifest,
			weight: Number((manifest.weight * 0.45).toFixed(2)),
			unit: 'kg',
		};
		return updatedManifest;
	}
	return manifest;
}

// function validateManifest(manifest) {
// 	const errors = {};
// 	const checks = {
// 		containerId: (value) =>
// 			value === undefined
// 				? 'Missing'
// 				: !Number.isInteger(value) || value < 1
// 					? 'Invalid'
// 					: true,

// 		destination: (value) =>
// 			value === undefined
// 				? 'Missing'
// 				: typeof value !== 'string' || value.trim().length === 0
// 					? 'Invalid'
// 					: true,

// 		weight: (value) =>
// 			value === undefined
// 				? 'Missing'
// 				: typeof value !== 'number' || Number.isNaN(value) || value < 0
// 					? 'Invalid'
// 					: true,

// 		unit: (value) =>
// 			value === undefined
// 				? 'Missing'
// 				: !['kg', 'lb'].includes(value)
// 					? 'Invalid'
// 					: true,

// 		hazmat: (value) =>
// 			value === undefined
// 				? 'Missing'
// 				: typeof value !== 'boolean'
// 					? 'Invalid'
// 					: true,
// 	};
// 	for (const key in checks) {
// 		if (!(key in manifest)) {
// 			errors[key] = 'Missing';
// 			continue;
// 		}

// 		const value = manifest[key];
// 		const result = checks[key](value);

// 		if (result !== true) {
// 			errors[key] = result;
// 		}
// 	}

// 	return errors;
// }

function validateManifest(manifest) {
	const errors = {};

	const checks = {
		containerId: (value) =>
			value === undefined
				? 'Missing'
				: !Number.isInteger(value) || value < 1
					? 'Invalid'
					: true,

		destination: (value) =>
			value === undefined
				? 'Missing'
				: typeof value !== 'string' || value.trim().length === 0
					? 'Invalid'
					: true,

		weight: (value) =>
			value === undefined
				? 'Missing'
				: typeof value !== 'number' || Number.isNaN(value) || value <= 0
					? 'Invalid'
					: true,

		unit: (value) =>
			value === undefined
				? 'Missing'
				: !['kg', 'lb'].includes(value)
					? 'Invalid'
					: true,

		hazmat: (value) =>
			value === undefined
				? 'Missing'
				: typeof value !== 'boolean'
					? 'Invalid'
					: true,
	};

	// handle non-object input
	if (!manifest || typeof manifest !== 'object') {
		for (const key in checks) {
			errors[key] = 'Missing';
		}
		return errors;
	}

	// detect unexpected properties
	for (const key in manifest) {
		if (!(key in checks)) {
			errors[key] = 'Invalid';
		}
	}

	// validate expected properties
	for (const key in checks) {
		const result = checks[key](manifest[key]);
		if (result !== true) {
			errors[key] = result;
		}
	}

	return errors;
}

console.log(
	'Calling validateManifest() with { containerId: 1, destination: "Santa Cruz", weight: 304, unit: "kg", hazmat: false } should return the new object {}.',
);
console.log(validateManifest(testValidate));

console.log(
	'Calling validateManifest() with { containerId: null, destination: "Santa Cruz", weight: 304, unit: "kg", hazmat: false } should return the new object { containerId: "Invalid" } without mutating the source input.',
);
console.log(validateManifest(testValidateTwo));

console.log(
	'Calling validateManifest() with { containerId: 0, destination: 405, weight: -84, unit: "pounds", hazmat: "no" } should return the new object { containerId: "Invalid", destination: "Invalid", weight: "Invalid", unit: "Invalid", hazmat: "Invalid" } without mutating the source input.',
);
console.log(validateManifest(testValidateThree));

console.log(
	'11. Calling validateManifest() with { containerId: -2 } should return the new object { containerId: "Invalid", destination: "Missing", weight: "Missing", unit: "Missing", hazmat: "Missing" } without mutating the source input.',
);
console.log(validateManifest(testValidateFour));

console.log(
	'12. Calling validateManifest() with { containerId: 3.50 } should return the new object { containerId: "Invalid", destination: "Missing", weight: "Missing", unit: "Missing", hazmat: "Missing" } without mutating the source input. You can use Number.isInteger() to validate integer values.',
);
console.log(validateManifest(testValidateFive));

console.log(
	'13. Calling validateManifest() with { destination: "  " } should return the new object { containerId: "Missing", destination: "Invalid", weight: "Missing", unit: "Missing", hazmat: "Missing" } without mutating the source input. You can use String.trim() to remove whitespace from a string.',
);
console.log(validateManifest(testValidateSix));

console.log(
	'14. Calling validateManifest() with { weight: NaN } should return the new object { containerId: "Missing", destination: "Missing", weight: "Invalid", unit: "Missing", hazmat: "Missing" } without mutating the source input. You can use Number.isNaN() to validate NaN values.',
);
console.log(validateManifest(testValidateSeven));

console.log(
	'8. Calling validateManifest() with {} should return the new object { containerId: "Missing", destination: "Missing", weight: "Missing", unit: "Missing", hazmat: "Missing" } without mutating the source input.',
);

console.log(validateManifest(testValidateEight));

console.log(
	validateManifest({
		containerId: 55,
		destination: 'Carmel',
		weight: 0,
		unit: 'lb',
		hazmat: false,
	}),
);

function processManifest(manifest) {}

// console.log(normalizeUnits(testCargo));
// console.log(
// 	'should equal { containerId: 68, destination: "Salinas", weight: 45.45, unit: "kg", hazmat: true }',
// );
