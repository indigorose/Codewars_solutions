const fullName = document.getElementById('full-name');
const email = document.getElementById('email');
const orderNo = document.getElementById('order-no');
const productCode = document.getElementById('product-code');
const quantity = document.getElementById('quantity');
const complaintsGroup = document.querySelector(
	'input[name="complaint"]:checked',
);
const damagedProduct = document.getElementById('damaged-product');
const nonConformingProduct = document.getElementById('nonconforming-product');
const delayedDispatch = document.getElementById('delayed-dispatch');
const otherComplaint = document.querySelector(
	'input[id="other-complaint"}:checked',
);
const complaintDescription = document.getElementById('complaint-description');
const solutionsGroup = document.querySelector('input[name="solutions]:checked');
const refund = document.getElementById('refund');
const exchange = document.getElementById('exchange');
const otherSolution = document.querySelector(
	'input[id="other-solution"}:checked',
);
const solutionDescription = document.getElementById('solution-description');
const submitBtn = document.getElementById('submit-btn');

function validateForm(inputForm) {
	const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
	const orderNoRegex = /^(2024)\d{6}$/g;
	const productCodeRegex = /^[a-zA-Z]{2}\d{2}-[a-zA-Z]\d{3}-[a-zA-Z]{2}\d$/;
	const inputFormCheck = {
		'full-name': (value) =>
			value === undefined
				? false
				: typeof value !== 'string' || value.trim().length === 0
					? false
					: true,
		email: (value) => emailRegex.test(value),
		'order-no': orderNoRegex.test(value),
		'product-code': productCodeRegex.test(value),
		quantity:
			value === undefined
				? false
				: typeof value !== 'number' || Number.isNaN(value) || value < 0
					? false
					: true,
		'complaints-group': complaintsGroup !== null,
		'complaint-description': (value) =>
			otherComplaint !== null
				? value === undefined
					? false
					: typeof value !== 'string' || value.trim().length < 20
						? false
						: true
				: false,
		'solutions-group': solutionsGroup !== null,
		'solution-description': (value) =>
			otherComplaint !== null
				? value === undefined
					? false
					: typeof value !== 'string' || value.trim().length < 20
						? false
						: true
				: false,
	};
	const validateResult = {};

	for (const key in inputFormCheck) {
		const value = inputForm[key];
		const result = inputFormCheck[key](value);
		validateResult[key] = result;
	}

	return validateResult;
}

function isValid() {}

submitBtn.addEventListener(submitBtn, isValid);
