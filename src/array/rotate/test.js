import { shift } from ".";

let array = [1, 2, 3, 4, 5, 6, 7]


describe('Shift array', () => {

  it('should left shift the array by 2', () => {
    let shiftedArray = shift(array, 2)
    expect(shiftedArray).toEqual([3, 4, 5, 6, 7, 1, 2])
  })

  it('should left shift the array by 3', () => {
    let shiftedArray = shift(array, 10)
    expect(shiftedArray).toEqual([4, 5, 6, 7, 1, 2, 3])
  })

  it('should right shift the array by 2', () => {
    let shiftedArray = shift(array, -2)
    expect(shiftedArray).toEqual([6, 7, 1, 2, 3, 4, 5])
  })

  it('should right shift the array by 3', () => {
    let shiftedArray = shift(array, -10)
    expect(shiftedArray).toEqual([5, 6, 7, 1, 2, 3, 4])
  })

})