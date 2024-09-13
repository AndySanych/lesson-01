// String
const username = "Mango";

// String concatenation
const massage = "Mango " + "is" + " happy";
console.log(massage);

console.log(1 + "2"); // 12
console.log(1 + "2" + 4); // 124
console.log(1 + 2 + "4"); // 34

// Template literals
const guestName = "Mango";
const roomNumber = 207;
// const greeting = "Welcome " + guestName + " your room number is " + roomNumber + "!";
const greeting = `Welcome ${guestName} your room number is ${roomNumber}!`;

console.log(greeting); // "Welcome Mango your room number is 207!"

// String properties and methods
// .length property
const messageLength = "Welcome to Bahamas!";

console.log(messageLength.length); // 19 (To find out the length of a string, i.e., the number of characters it contains)

console.log("There is nothing impossible to him who will try".length); // 47

// Methods toLowerCase() and toUpperCase()- Return a new string in the corresponding case without modifying the original string
const massageToLowerUpperCase = "Welcome to Bahamas!";

console.log(massageToLowerUpperCase.toLowerCase()); // "welcome to bahamas!"
console.log(massageToLowerUpperCase.toUpperCase()); // "WELCOME TO BAHAMAS!"
console.log(massageToLowerUpperCase); // "Welcome to Bahamas!"

console.log("samSung" === "Samsung"); // false
console.log("saMsUng" === "SAMSUNG"); // false

// To avoid requiring exact input, you can perform 'normalization' of the user-entered string
const BRAND_NAME = "SAMSUNG";
const userInput = "sAmsuNg";
const normalizedToUpperCase = userInput.toLocaleUpperCase(); // Returns a new string in the corresponding case without modifying the original one

console.log(userInput); // sAmsuNg
console.log(userInput === BRAND_NAME); // false

console.log(normalizedToUpperCase); // SAMSUNG
console.log(normalizedToUpperCase === BRAND_NAME); // true

// Method indexOf() - Returns the position (index) of the first substring match, or -1 if nothing is found
const massegeUser = "Welcome to Bahamas!";

console.log(massegeUser.indexOf("to")); // 8
console.log(massegeUser.indexOf("hello")); // -1

// Method includes() - Checks if the substring is contained within the string, returns a boolean - true if it is found, and false otherwise.
const productName = "Škoda SuperB";

// Case-sensitive ("a" !== "A")!!!
console.log(productName.includes("B")); // true
console.log(productName.includes("b")); // false
console.log(productName.includes("SuperB")); // true
console.log(productName.includes("superB")); // false
console.log(productName.includes("Škoda")); // true
console.log(productName.includes("ŠKODA")); // false

// Method .endsWith() - Allows you to determine if a string ends with the characters (substring) specified in parentheses, returning true or false
const jsFileName = "script.js";
console.log(jsFileName.endsWith(".js")); // true

const cssFileName = "styles.css";
console.log(cssFileName.endsWith(".js")); // false

// Methods .replace() and .replaceAll() - Returns a new string where the first match (replace) or all matches (replaceAll) of the substring are replaced with the specified value
const jsFileNameReplace = "script.js";
const minifiedJsFileNameReplace = jsFileNameReplace.replace(".js", ".min.js");
console.log(minifiedJsFileNameReplace); // "script.min.js"

const cssFileNameReplace = "styles.css, about.css, portfolio.css";
const minifiedCssFileNameReplace = cssFileNameReplace.replaceAll(
  ".css",
  ".min.css"
);
console.log(minifiedCssFileNameReplace); // "styles.min.css, about.min.css, portfolio.min.css"

// Method .slice() - The string method slice(startIndex, endIndex) is used to create a copy of a part or the entire string. It copies the elements of the string from startIndex up to, but not including, endIndex and returns a new string without modifying the original one
const productNameCar = "Škoda SuperB";

console.log(productNameCar.slice()); // "Škoda SuperB"
console.log(productNameCar.slice(0, 5)); // "Škoda"
console.log(productNameCar.slice(3, 9)); // "da Sup"

console.log(productNameCar.length); // 12
console.log(productNameCar.slice(0, productNameCar.length)); // "Škoda SuperB"
console.log(productNameCar.slice(6, productNameCar.length)); // "SuperB"

console.log(productNameCar.slice(13, 14)); // 
console.log(productNameCar.slice(13, 14).length); // 0
console.log(typeof productNameCar.slice(13, 14)); // string
// All string methods are case-sensitive!!!
