// Create a JSON string.
// This is just text that follows JSON format.
const jsonString = '{"name":"Bhargov","age":30}';

// Convert the JSON string into a JavaScript object.
// JSON.parse() reads the string and creates an object from it.
const jsonObject = JSON.parse(jsonString);

// Access the 'name' property from the object
// and print it to the console.
console.log(jsonObject.name);
console.log(jsonObject);
console.log(typeof jsonObject)



const objectToConvert = {"name":"Bhargov","age":30};
const json = JSON.stringify(objectToConvert);
console.log(json);
console.log(typeof json)
