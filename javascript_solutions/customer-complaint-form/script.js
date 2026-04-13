const form = document.getElementById('form');
const fullName = document.getElementById('full-name');
const email = document.getElementById('email');
const orderNo = document.getElementById('order-no');
const productCode = document.getElementById('product-code');
const quantity = document.getElementById('quantity');
const complaintDescription = document.getElementById('complaint-description');
const solutionDescription = document.getElementById('solution-description');
const complaintsFieldset = document.getElementById('complaints-group');
const solutionsFieldset = document.getElementById('solutions-group');

function validateForm() {
	const isFullName = fullName.value.trim() !== '';
	const isEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email.value);
	const isOrderNo = /^(2024)\d{6}$/g.test(orderNo.value);
	const isProductCode = /^[a-zA-Z]{2}\d{2}-[a-zA-Z]\d{3}-[a-zA-Z]{2}\d$/.test(
		productCode.value,
	);
	const qtyVal = parseInt(quantity.value, 10);
	const isQuantity =
		!isNaN(qtyVal) &&
		qtyVal > 0 &&
		String(qtyVal) === quantity.value.trim();
	const checkedComplaints = document.querySelectorAll(
		'input[name="complaint"]:checked',
	);
	const isComplaintsGroup = checkedComplaints.length > 0;
	const otherComplaintChecked =
		document.getElementById('other-complaint')?.checked ?? false;
	const isComplaintDescription = otherComplaintChecked
		? complaintDescription.value.trim().length >= 20
		: true;
	const checkedSolution = document.querySelector(
		'input[name="solution"]:checked',
	);
	const isSolutionsGroup = checkedSolution !== null;
	const otherSolutionChecked =
		document.getElementById('other-solution')?.checked ?? false;
	const isSolutionDescription = otherSolutionChecked
		? solutionDescription.value.trim().length >= 20
		: true;

	return {
		'full-name': isFullName,
		email: isEmail,
		'order-no': isOrderNo,
		'product-code': isProductCode,
		quantity: isQuantity,
		'complaints-group': isComplaintsGroup,
		'complaint-description': isComplaintDescription,
		'solutions-group': isSolutionsGroup,
		'solution-description': isSolutionDescription,
	};
}

function isValid(validationResult) {
	return Object.values(validationResult).every((value) => value === true);
}

function getElementForKey(key) {
	const map = {
		'full-name': fullName,
		email: email,
		'order-no': orderNo,
		'product-code': productCode,
		quantity: quantity,
		'complaints-group': complaintsFieldset,
		'complaint-description': complaintDescription,
		'solutions-group': solutionsFieldset,
		'solution-description': solutionDescription,
	};
	return map[key];
}

function highlightField(element, valid) {
	if (element) element.style.borderColor = valid ? 'green' : 'red';
}

form.addEventListener('submit', (event) => {
	event.preventDefault();
	const results = validateForm();

	for (const [key, valid] of Object.entries(results)) {
		highlightField(getElementForKey(key), valid);
	}

	if (isValid(results)) {
		console.log('success');
	}
});

[
	(fullName,
	email,
	orderNo,
	productCode,
	quantity,
	complaintDescription,
	solutionDescription),
].forEach((field) => {
	field.addEventListener('change', () => {
		const results = validateForm();
		const key =
			field.id === 'complaint-description'
				? 'complaint-description'
				: field.id === 'solution-description'
					? 'solution-description'
					: field.id;
		highlightField(field, results[key]);
	});
});

complaintsFieldset.addEventListener('change', () => {
	const results = validateForm();
	highlightField(complaintsFieldset, results['complaints-group']);

	const otherComplaintChecked =
		document.getElementById('other-complaint').checked;
	if (otherComplaintChecked) {
		highlightField(complaintDescription, results['complaint-description']);
	} else {
		complaintDescription.style.borderColor = ''; // reset when Other is unchecked
	}
});

solutionsFieldset.addEventListener('change', () => {
	const results = validateForm();
	highlightField(solutionsFieldset, results['solutions-group']);

	const otherSolutionChecked =
		document.getElementById('other-solution').checked;
	if (otherSolutionChecked) {
		highlightField(solutionDescription, results['solution-description']);
	} else {
		solutionDescription.style.borderColor = ''; // reset when Other is not selected
	}
});
solutionDescription.addEventListener('change', () => {
	const otherSolutionChecked =
		document.getElementById('other-solution').checked;
	if (!otherSolutionChecked) return;
	const results = validateForm();
	highlightField(solutionDescription, results['solution-description']);
});

complaintDescription.addEventListener('change', () => {
	const otherComplaintChecked =
		document.getElementById('other-complaint').checked;
	if (!otherComplaintChecked) return;
	const results = validateForm();
	highlightField(complaintDescription, results['complaint-description']);
});
