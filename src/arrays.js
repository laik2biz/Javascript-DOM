function arrays(item) {
  item = [1, 2, 3, 4];
  return `${item[0]} ${item.pop()}`;
}

function compareArrays(param1, param2) {
  if (param1.length > param2.length) {
    return param1;
  } else {
    return param2;
  }
}

function stringToArray(argu) {
  let split = argu.split(",");
  return split;
}

export { arrays, compareArrays, stringToArray };
