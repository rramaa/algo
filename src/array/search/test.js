import {binarySearch, searchInRotatedSortedArray} from '.'

describe("Search an element using binary search", () => {
  const arrayEven = [1, 2, 3, 4, 5, 6, 7, 8]
  const arrayOdd = [1, 2, 3, 4, 5, 6, 7]
  it("Search random element in array of even number of elements", () => {
    const index = binarySearch(arrayEven, 3)
    expect(index).toEqual(2)
  })

  it("Search element at beginning in array of even number of elements", () => {
    const index = binarySearch(arrayEven, 1)
    expect(index).toEqual(0)
  })

  it("Search element at end in array of even number of elements", () => {
    const index = binarySearch(arrayEven, 8)
    expect(index).toEqual(7)
  })

  it("Search element at beginning in array of odd number of elements", () => {
    const index = binarySearch(arrayOdd, 1)
    expect(index).toEqual(0)
  })

  it("Search element at end in array of odd number of elements", () => {
    const index = binarySearch(arrayOdd, 7)
    expect(index).toEqual(6)
  })

  it("Search random element in array of odd number of elements", () => {
    const index = binarySearch(arrayOdd, 5)
    expect(index).toEqual(4)
  })

  it("Search element not present in array ", () => {
    const index = binarySearch(arrayEven, 10)
    expect(index).toEqual(-1)
  })
})

describe("Search an element using rotated and sorted array", () => {
  const arrayEven = [3, 4, 5, 6, 7, 8, 1, 2]
  const arrayOdd = [3, 4, 5, 6, 7, 1, 2]
  it("Search random element in array of even number of elements", () => {
    const index = searchInRotatedSortedArray(arrayEven, 5)
    expect(index).toEqual(2)
  })

  it("Search element at beginning in array of even number of elements", () => {
    const index = searchInRotatedSortedArray(arrayEven, 3)
    expect(index).toEqual(0)
  })

  it("Search element at end in array of even number of elements", () => {
    const index = searchInRotatedSortedArray(arrayEven, 2)
    expect(index).toEqual(7)
  })

  it("Search element at beginning in array of odd number of elements", () => {
    const index = searchInRotatedSortedArray(arrayOdd, 3)
    expect(index).toEqual(0)
  })

  it("Search element at end in array of odd number of elements", () => {
    const index = searchInRotatedSortedArray(arrayOdd, 2)
    expect(index).toEqual(6)
  })

  it("Search random element in array of odd number of elements", () => {
    const index = searchInRotatedSortedArray(arrayOdd, 1)
    expect(index).toEqual(5)
  })

  it("Search element not present in array ", () => {
    const index = searchInRotatedSortedArray(arrayEven, 10)
    expect(index).toEqual(-1)
  })  
})
