import bubbleSort from "../bubbleSort/bubbleSort"

function findMissingElement(firstArray, secondArray) {
  let missingElement

  const firstSortedArray = bubbleSort(firstArray)
  const secondSortedArray = bubbleSort(secondArray)

  for (let i = 0; i < firstSortedArray.length; i++) {
    if (firstSortedArray[i] !== secondSortedArray[i]) {
      if (firstSortedArray.length > secondSortedArray.length)
        missingElement = firstSortedArray[i]
      else missingElement = secondSortedArray[i]

      break
    }
  }

  return missingElement
}

export default findMissingElement
