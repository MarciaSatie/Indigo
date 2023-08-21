// press alt+g to Run the code

// TIP-01 ***To use Math.random shorter line *************
var someArray = [1, 2, 3, 4, 5];
var x = someArray[(someArray.length * Math.random()) | 0];
// "| 0" part is the same as taking the floor of the number.
console.log(x);

// TIP-02 *** Null, Undefined, Empty checks *************
// Longhand version
var productName = null;
if (productName !== undefined || productName !== "" || productName !== null) {
  console.log("ProdctName Longhand version: " + productName);
}

// Shorthand version
if (productName) {
  console.log("ProdctName Shorthand version: " + productName);
}
