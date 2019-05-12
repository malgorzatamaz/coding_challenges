import Stack from "./stack"

let stack = new Stack()

beforeEach(() => {
  stack.clear()
})

it("should push element", () => {
  stack.push(1)
  stack.push("element")

  expect(stack.show()).toEqual("[1, element]")
  expect(stack.size()).toEqual(2)
})

it("should pop element", () => {
  stack.push(1)
  stack.push("element")

  const element = stack.pop()
  expect(element).toEqual("element")
})

it("should be empty", () => {
  stack.push(1)
  stack.push("element")

  stack.pop()
  stack.pop()

  expect(stack.isEmpty()).toEqual(true)
})
