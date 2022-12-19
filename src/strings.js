function strings() {
  const a = "I am calling this function and passing this text as an argument. ";
  return a;
}

function concatenate(con) {
  const b = "Now I have concatenated this string to the prior sentence.";
  return con + b;
}

const temperateLiterals = (arg) => {
  const c = strings();
  const d = concatenate();
  console.log(`${c}`, `${d}`);
};

export { strings, concatenate, temperateLiterals };
