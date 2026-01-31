let email = 'apple.pie@example.com';

const maskEmail = (email) => {
	let emailSlice = email.slice(1, email.indexOf('@') - 1);
	return email.replace(emailSlice, '*'.repeat(emailSlice.length));
};

console.log(maskEmail(email));
