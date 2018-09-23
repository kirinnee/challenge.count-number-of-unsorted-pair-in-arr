

function sort(array) {
	const length = count(array);
	const mid = Math.ceil(length / 2);

	const pairPair = split(array, mid);

	const pair1 = pairPair[0];
	const pair2 = pairPair[1];

	const c1 = count(pair1);
	const c2 = count(pair2);

	const amt1 = c1 === 1 ? [0, pair1] : sort(pair1);
	const amt2 = c2 === 1 ? [0, pair2] : sort(pair2);


	return merge(amt1[1], amt2[1], [], amt1[0] + amt2[0]);
}

function count(array) {
	return countRecursive(array, 0);
}

function countRecursive(array, count) {
	return typeof array[0] === "undefined" ? count : countRecursive(array[1], count + 1);
}

function split(array, amount) {
	return splitRecursive(array, [], amount);
}

function splitRecursive(left, right, amount) {
	if (amount === 0) {
		return [inverse(right), left];
	} else {
		return splitRecursive(left[1], [left[0], right], amount - 1);
	}
}

function inverse(arr) {
	return inverseRercursive(arr, []);
}

function inverseRercursive(left, right) {
	return typeof left[0] === "undefined" ? right : inverseRercursive(left[1], [left[0], right]);
}

function merge(left, right, total, counter) {
	if (typeof left[0] === "undefined" || typeof right[0] === "undefined") return appendEnd(left, right, total, counter);

	
	return left[0] < right[0] ?
		merge(left[1], right, [left[0], total], counter) :
		merge(left, right[1], [right[0], total], counter + count(left));
}

function appendEnd(left, right, total, count) {
	if (typeof left[0] !== "undefined") {
		return appendEnd(left[1], right, [left[0], total], count);
	} else if (typeof right[0] !== "undefined") {
		return appendEnd(left, right[1], [right[0], total], count);
	} else {
		return [count, inverse(total)];
	}
}


function check(arr) {

	let count = 0;
	for (var i = 0; i < arr.length; i++) {
		let c = arr[i];
		for (var j = i+1; j < arr.length; j++) {
			let partner = arr[j];
			if (c > partner) {
				count++;
			}
		}
	}
	return count;
	
}

function convertFromPairStructure(farr) {
	let ret = [];
	while (count(farr)>0){
		ret.push(farr[0]);
		farr = farr[1]
	}
	return ret;
}



module.exports = { sort, count, split, inverse, merge, check, convertFromPairStructure };