// ex1
function countdown(callback) {
	window.setTimeout(callback, 2000);
}

// ex2
function createMultiplier(y) {
	return x => x*y;
}

doubler = createMultiplier(2);
tripler = createMultiplier(3);
