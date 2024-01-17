// Training JS #1: create your first JS function and print 'Hello World!'

function helloWorld() {
	var str = 'Hello World!';
	console.log(str);
}
// Training JS #2: Basic data types--Number

let v1 = 50,
	v2 = 100,
	v3 = 150,
	v4 = 200,
	v5 = 2,
	v6 = 250;

function equal1() {
	let a = v1,
		b = v1;
	return a + b;
}

//Please refer to the example above to complete the following functions
function equal2() {
	let a = v3, //set number value to a
		b = v1; //set number value to b
	return a - b;
}

function equal3() {
	let a = v1, //set number value to a
		b = v5; //set number value to b
	return a * b;
}

function equal4() {
	let a = v4, //set number value to a
		b = v5; //set number value to b
	return a / b;
}

function equal5() {
	let a = v2, //set number value to a
		b = v4; //set number value to b
	return a % b;
}

// Training JS #3: Basic data types--String

var a1 = 'A',
	a2 = 'a',
	b1 = 'B',
	b2 = 'b',
	c1 = 'C',
	c2 = 'c',
	d1 = 'D',
	d2 = 'd',
	e1 = 'E',
	e2 = 'e',
	n1 = 'N',
	n2 = 'n';
function Dad() {
	//select some variable to combine "Dad"
	return d1 + a2 + d2;
}
function Bee() {
	//select some variable to combine "Bee"
	return b1 + e2 + e2;
}
function banana() {
	//select some variable to combine "banana"
	return b2 + a2 + n2 + a2 + n2 + a2;
}

//answer some questions if you finished works above
function answer1() {
	//the answer should be "yes" or "no"
	return 'no';
}
function answer2() {
	//the answer should be "yes" or "no"
	return 'no';
}
function answer3() {
	//the answer should be "yes" or "no"
	return 'yes';
}

// Training JS #4: Basic data types--Arrays

function getLength(arr) {
	//return length of arr
	return arr.length;
}
function getFirst(arr) {
	//return the first element of arr
	return arr[0];
}
function getLast(arr) {
	//return the last element of arr
	return arr[arr.length - 1];
}
function pushElement(arr) {
	var el = 1;
	//push el to arr
	arr.push(el);
	return arr;
}
function popElement(arr) {
	//pop an element from arr
	arr.pop();
	return arr;
}

//  Training JS #5: Basic data types--Object

function animal(obj) {
	return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
}

// Training JS#6: Basic data types--Boolean and conditional statements if..else

function trueOrFalse(val) {
	if (val == false || val == null) {
		return 'false';
	} else {
		return 'true';
	}
}

// Training JS #8: Conditional statement--switch

function howManydays(month) {
	var days = 0;
	switch (month) {
		case 1:
			return 31;
			break;
		case 2:
			return 28;
			break;
		case 3:
			return 31;
			break;
		case 4:
			return 30;
			break;
		case 5:
			return 31;
			break;
		case 6:
			return 30;
			break;
		case 7:
			return 31;
			break;
		case 8:
			return 31;
			break;
		case 9:
			return 30;
			break;
		case 10:
			return 31;
			break;
		case 11:
			return 30;
			break;
		case 12:
			return 31;
			break;
	}
	return days;
}

// Training JS #9: Loop statement - while and do..while

function padIt(str, n) {
	var num = 1;
	var result = str;
	while (num <= n) {
		if (num % 2 != 0) {
			result = '*' + result;
			num++;
		} else {
			result = result + '*';
			num++;
		}
	}
	return result;
}

// Training Js #10: Loop statement--for

function pickIt(arr) {
	var odd = [],
		even = [];
	for (i = 0; i < arr.length; i++) {
		if (arr[i] % 2 == 0) {
			even.push(arr[i]);
		} else {
			odd.push(arr[i]);
		}
	}

	return [odd, even];
}

// Training JS #11: loop statement -- break, continue
function grabDoll(dolls) {
	var bag = [];
	for (var i = 0; i < dolls.length; i++) {
		if (dolls[i] == 'Hello Kitty' || dolls[i] == 'Barbie doll') {
			bag.push(dolls[i]);
			if (bag.length == 3) {
				break;
			} else {
				continue;
			}
		} else {
			continue;
		}
	}

	return bag;
}

// Training JS #12: loop statement--for..in and for..of

function giveMeFive(obj) {
	var arr = [];
	for (key in obj) {
		if (key.length == 5 && obj[key].length != 5) {
			arr.push(key);
		} else if (key.length != 5 && obj[key].length == 5) {
			arr.push(obj[key]);
		} else if (key.length == 5 && obj[key].length == 5) {
			arr.push(key);
			arr.push(obj[key]);
		} else {
			continue;
		}
	}
	return arr;
}

// Training JS #13: Number object and its properties

function whatNumberIsIt(n) {
	if (n == Number.MAX_VALUE) {
		return 'Input number is Number.MAX_VALUE';
	} else if (n == Number.MIN_VALUE) {
		return 'Input number is Number.MIN_VALUE';
	} else if (n == -Infinity) {
		return 'Input number is Number.NEGATIVE_INFINITY';
	} else if (n == Infinity) {
		return 'Input number is Number.POSITIVE_INFINITY';
	} else if (n == Number(n)) {
		return `Input number is ${n}`;
	} else {
		return 'Input number is Number.NaN';
	}
}

// Training JS #14: Methods of Number object -- toString() and toLocaleString()

function colorOf(r, g, b) {
	w = r.toString(16);
	if (w.length <= 1) {
		w = '0' + w;
	}
	e = g.toString(16);
	if (e.length <= 1) {
		e = '0' + e;
		console.log(e);
	}
	v = b.toString(16);
	if (v.length <= 1) {
		v = '0' + v;
		console.log(e);
	}

	return `#${w}${e}${v}`;
}

// Training JS #15: Mehtods of Number object --toFixed(), toExponential()and toPrecision()

function howManySmaller(arr, n) {
	let count = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].toFixed(2) < n) {
			count += 1;
		}
	}
	return count;
}

console.log(howManySmaller([1.234, 1.235, 1.228], 1.24));
