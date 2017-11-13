function countdown(callback) {
	window.setTimeout(callback, 2000);
}

function createMultiplier(x, y) {
	return Math.pow(x, y);
}

doubler = createMultiplier.bind(null, null, 2);
tripler = createMultiplier.bind(null, null, 3);
