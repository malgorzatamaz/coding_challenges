import bubbleSort from "./bubbleSort"

it("should sort array", () => {
  const unsortedArray = [5, 3, 1, 6, 4]
  const res = bubbleSort(unsortedArray)
  expect(res).toStrictEqual([1, 3, 4, 5, 6])
})
