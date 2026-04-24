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
	const isEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.value);
	const isOrderNo = /^(2024)\d{6}$/.test(orderNo.value);
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
		'input[name="solutions"]:checked',
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

fullName.addEventListener('change', () => {
	const results = validateForm();
	const key =
		fullName === 'complaint-description'
			? 'complaint-description'
			: fullName === 'solution-description'
				? 'solution-description'
				: fullName;
	highlightField(fullName, results['full-name']);
});

email.addEventListener('change', () => {
	const results = validateForm();
	const key =
		email === 'complaint-description'
			? 'complaint-description'
			: email === 'solution-description'
				? 'solution-description'
				: email;
	highlightField(email, results['email']);
});

orderNo.addEventListener('change', () => {
	const results = validateForm();
	const key =
		orderNo === 'complaint-description'
			? 'complaint-description'
			: orderNo === 'solution-description'
				? 'solution-description'
				: orderNo;
	highlightField(orderNo, results['order-no']);
});

quantity.addEventListener('change', () => {
	const results = validateForm();
	const key =
		quantity === 'complaint-description'
			? 'complaint-description'
			: quantity === 'solution-description'
				? 'solution-description'
				: quantity;
	highlightField(quantity, results['quantity']);
});

productCode.addEventListener('change', () => {
	const results = validateForm();
	const key =
		productCode === 'complaint-description'
			? 'complaint-description-container'
			: productCode === 'solution-description'
				? 'solution-description'
				: productCode;
	highlightField(productCode, results['product-code']);
});

complaintsFieldset.addEventListener('change', () => {
	const results = validateForm();
	highlightField(complaintsFieldset, results['complaints-group']);

	const otherComplaintChecked =
		document.getElementById('other-complaint').checked;
	if (otherComplaintChecked) {
		highlightField(complaintDescription, results['complaint-description']);
	} else {
		complaintDescription.style.borderColor = '';
	}
});
complaintDescription.addEventListener('change', () => {
	const otherComplaintChecked =
		document.getElementById('other-complaint').checked;
	if (!otherComplaintChecked) return;
	const results = validateForm();
	highlightField(complaintDescription, results['complaint-description']);
});

solutionsFieldset.addEventListener('change', () => {
	const results = validateForm();
	highlightField(solutionsFieldset, results['solutions-group']);

	const otherSolutionChecked =
		document.getElementById('other-solution').checked;
	const container = document.getElementById('solution-description-container');
	if (otherSolutionChecked) {
		container.classList.add('visible');
		highlightField(solutionDescription, results['solution-description']);
	} else {
		container.classList.remove('visible');
		solutionDescription.style.borderColor = '';
	}
});
solutionDescription.addEventListener('change', () => {
	const otherSolutionChecked =
		document.getElementById('other-solution').checked;
	if (!otherSolutionChecked) return;
	const results = validateForm();
	highlightField(solutionDescription, results['solution-description']);
});
