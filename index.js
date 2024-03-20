// Get Mean
const getMean = (array) => array.reduce((acc, el) => acc + el, 0) / array.length;

// Get Median
const getMedian = (array) => {
	const sorted = array.sort((a, b) => a - b);
	const median = array.length % 2 === 0 ? getMean([sorted[array.length / 2], sorted[array.length / 2 - 1]]) : sorted[Math.floor(array.length / 2)];
	return median;
};
