class Stack {
  constructor() {
    this.values = []
  }

  clear() {
    this.values = []
  }

  pop() {
    const popedValue = this.values[this.values.length - 1]
    this.values = this.values.slice(0, this.values.length - 1)
    return popedValue
  }

  push(value) {
    this.values[this.values.length] = value
  }

  isEmpty() {
    return this.values.length === 0
  }

  size() {
    return this.values.length
  }

  show() {
    return "[" + this.values.join(", ") + "]"
  }
}

export default Stack
