function addNumberToValue(valueToAdd) {
    return function(value) {
      return value + valueToAdd;
    };
  }
  const addFive = addNumberToValue(5);
  console.log(addFive(10)); // Output: 15
  console.log(addFive(20)); // Output: 25
  console.log(addFive(-5)); // Output: 0
  const addTen = addNumberToValue(10);
  console.log(addTen(10)); // Output: 20
  console.log(addTen(20)); // Output: 30
  console.log(addTen(-5)); // Output: 5
  