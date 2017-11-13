// ex1
function countdown(callback) {
	window.setTimeout(callback, 2000);
}

// ex2
function createMultiplier(y) {
	return x => Math.pow(x, y);
}

doubler = createMultiplier(2);
tripler = createMultiplier(3);

// ex3
function createMultiplier(x, y) {
	return Math.pow(x, y);
}


doubler = createMultiplier.bind(null, null, 2);
tripler = createMultiplier.bind(null, null, 3);
