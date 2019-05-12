import integerLength from "./integerLenght"

it("should sort array", () => {
  const longInteger = 123412

  const length = integerLength(longInteger)
  expect(length).toStrictEqual(6)
})
