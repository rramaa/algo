/**
 * @export
 * @param {array} array 
 * @param {number} n 
 * @returns {number}
 */
export function binarySearch(array, n, start = 0, end = array.length) {
  let mid = parseInt((end - start) / 2) + start
  if(n === array[mid]) {
    return mid
  } else {
    if(end - start <= 1) {
      return -1
    }
  }
  if(n < array[mid]) return binarySearch(array, n, 0, mid)
  if(n > array[mid]) return binarySearch(array, n, mid + 1, end)
  return -1
}

/**
 * @export
 * @param {array} array 
 * @param {number} n
 * @returns {number}
 */
export function searchInRotatedSortedArray(array, n) {
  let low = 0
  let high = array.length
  while (low < high) {
    const mid = parseInt((low + high) / 2)
    if(array[mid] === n) {
      return mid
    } else if(isSorted(array.slice(low, mid))) {
      if(n < array[mid] && n >= array[low]) {
      high = mid
      } else {
        low = mid + 1
      }
    } else {
      if(n > array[mid] && n <= array[high]) {
        low = mid + 1
      } else {
      high = mid
      }
    }
  }
  return -1
}

/**
 * @param {array} array 
 * @returns {boolean}
 */
function isSorted (array) {
  console.log(array)
  return array[0] <= array[array.length - 1]
}

// console.log(searchInRotatedSortedArray([3, 4, 5, 6, 7, 1, 2], 3))
