function feast(beast, dish) {
	//your function here
	// console.log(beast.slice(-1));
	// console.log(dish.slice(-1));
	// console.log(beast.at(0));
	return beast.at(-1) === dish.at(-1) && beast.at(0) == dish.at(0)
		? true
		: false;
}

console.log(feast('brown bear', 'bear claw'));
