/**
 * @export
 * @param {array} arr 
 * @param {number} d 
 * @returns {number}
 */
export function shift(arr, d) {
	const n = arr.length
	d = d % n
	const shifted = Array(n)
	for(let i = 0; i < n; i++) {
		let pointer = (i - d + n) % n
		shifted[pointer] = arr[i]
	}
	return shifted
}

// console.log(shift([1, 2, 3, 4, 5, 6, 7], 1))

// 1, 2, 3, 4, 5, 6, 7
// 3, 4, 5, 6, 7, 1, 2
// 6, 7, 1, 2, 3, 4, 5
