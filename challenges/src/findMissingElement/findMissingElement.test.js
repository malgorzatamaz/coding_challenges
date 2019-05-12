import findMissingElement from "./findMissingElement"

it("should find missing element 1", () => {
  const firstArray = [5, 3, 1, 6, 4]
  const secondArray = [4, 5, 1, 3]

  const missingElement = findMissingElement(firstArray, secondArray)
  expect(missingElement).toStrictEqual(6)
})

it("should find missing element", () => {
  const firstArray = [5, 3, 2, 3, 8, 1, 9]
  const secondArray = [9, 8, 3, 2, 1, 5]

  const missingElement = findMissingElement(firstArray, secondArray)
  expect(missingElement).toStrictEqual(3)
})
