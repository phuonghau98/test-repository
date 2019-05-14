const array = [10, 7, 12, 6, 3, 2, 8]

Array.prototype.swap = function (x, y) {
  [this[x], this[y]] = [this[y], this[x]]
  return this
}

function quickSort (arr) {
  if (arr.length <= 1) return arr

  const pivot = arr[arr.length - 1]
  const pivotIndex = arr.length - 1

  let i = 0, j = 0

  while (j != pivotIndex) {
    if (arr[j] <= pivot) {
      arr.swap(i, j)
      i++
    }
    j++
  }

  arr.swap(pivotIndex, i)
  const left = quickSort(arr.slice(0, i))
  const middle = arr[i]
  const right = quickSort(arr.slice(i + 1))
  return left.concat(middle).concat(right)
}

const sorted = quickSort(array)
console.log(sorted)