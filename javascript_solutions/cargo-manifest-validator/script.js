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
function validateManifest(manifest) {}
function processManifest(manifest) {}

console.log(normalizeUnits(testCargo));
console.log(
	'should equal { containerId: 68, destination: "Salinas", weight: 45.45, unit: "kg", hazmat: true }',
);
