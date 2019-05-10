function bubbleSort(unsortedArray) {
  let tmp

  for (let i = 0; i < unsortedArray.length; i++) {
    for (let j = 0; j < unsortedArray.length; j++) {
      if (unsortedArray[j] > unsortedArray[j + 1]) {
        tmp = unsortedArray[j]
        unsortedArray[j] = unsortedArray[j + 1]
        unsortedArray[j + 1] = tmp
      }
    }
  }

  return unsortedArray
}

export default bubbleSort
