var assert = require("assert");
var calculator = require("../app/calculator");

describe("Calculator", function() {
  it("returns zero", function() {
    let result = calculator.calculate("0");
    return assert.equal(result, 0);
  });

  it("calculates addition", function() {
    let result = calculator.calculate("+ 3 4");
    return assert.equal(result, 3 + 4);
  });

  it("calculates subtraction and multiplication", function() {
    let result = calculator.calculate("- 3 * 4 5");
    return assert.equal(result, 3 - (4 * 5));  // -17
  });

  it("calculates addition and multiplication", function() {
    let result = calculator.calculate("* + 3 4 5");
    return assert.equal(result, (3 + 4) * 5);  // 35
  });

  it("throws error for too many operands", function() {
    try{
      calculator.calculate("+ 3 4 5");
      assert.fail("Expected error not thrown")
    }catch(error){
      return assert.equal("Too many operands", error.message)
    }
  });

  it("throws error for not enough operands", function() {
    try{
      calculator.calculate("+ 3");
      assert.fail("Expected error not thrown")
    }catch(error){
      return assert.equal("Not enough operands", error.message)
    }
  });

  it("throws error for invalid element", function() {
    try{
      calculator.calculate("^ 3 4");
      assert.fail("Expected error not thrown")
    }catch(error){
      return assert.equal("Invalid element: ^", error.message)
    }
  });

  it("throws error for division by zero", function() {
    try{
      calculator.calculate("/ 3 0");
      assert.fail("Expected error not thrown")
    }catch(error){
      return assert.equal("Can't make a division by zero", error.message)
    }
  });

  it("throws error for non-string input", function() {
    try{
      calculator.calculate(345);
      assert.fail("Expected error not thrown")
    }catch(error){
      return assert.equal("Input must be a non-empty string", error.message)
    }
  });

  it("throws error for empty input", function() {
    try{
      calculator.calculate("");
      assert.fail("Expected error not thrown")
    }catch(error){
      return assert.equal("Input must be a non-empty string", error.message)
    }
  });

  it("throws error for invalid element", function() {
    try{
      calculator.calculate("+ 3 c");
      assert.fail("Expected error not thrown")
    }catch(error){
      return assert.equal("Invalid element: c", error.message)
    }
  });
})

