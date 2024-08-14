// Time complexity O(n)
// Space complexity O(n)

exports.calculate = function(expression) {
  if(typeof expression !== 'string' || expression.trim() === ''){
    throw new Error(`Input must be a non-empty string`);
  }

  // Splits the input expression in an array and reverses its order
  const expressionElements = expression.trim().split(/\s+/).reverse();

  // Creates of a pile to order the operations correctly
  const pile = [];

  // For each element of the array
  while (expressionElements.length){
    // Takes the first element of the array
    const element = expressionElements.shift();

    // If it's an operator, takes the numbers of the pile and make the operation
    if(['*', '+', '/', '-'].includes(element)){
      if(pile.length<2){
        throw new Error(`Not enough operands`);
      }
      const numbers = [pile.pop(), pile.pop()];
      pile.push(makeOperation(element, numbers));
    }else if(!isNaN(parseFloat(element))){
      // If it's an operand, add it to the pile
      pile.push(parseFloat(element));
    }else{
      throw new Error(`Invalid element: ${element}`);
    }
  }

  if(pile.length !== 1){
    throw new Error(`Too many operands`);
  }

  // Return the last element of the pile, the total
  return pile[0];
}

// Executes the operation
function makeOperation(operator, numbers){
  const [x, y] = numbers;
  switch(operator){
    case '*': return x*y;
    case '+': return x+y;
    case '/':
      if(y === 0){
        throw new Error(`Can't make a division by zero`);
      }
      return x/y;
    case '-': return x-y;
  }
}
