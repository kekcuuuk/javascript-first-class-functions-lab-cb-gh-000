function countdown(callback) {
	window.setTimeout(callback, 2000);
}

function multiplier(x, y) {
	return Math.pow(x, y);
}

doublerWithBind = multiplier.bind(null, null, 2);
triplerWithBind = multiplier.bind(null, null, 3);