function forLoop(value) {
  let letters = [];

  for (let i = 0; i < value.length; i++) {
    letters.push(i);
  }
  return letters;
}

function indexOfAlphabetsArray(arr, arr2) {
  let a = [];

  for (let i = 0; i < arr.length; i++) {
    a.push(`${arr[i]} ${arr2[i]}`);
  }
  return a;
}

export { forLoop, indexOfAlphabetsArray };
