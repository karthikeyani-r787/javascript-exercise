// Task : Modify JSON Data
// 1. Convert JSON → object.
// 2. Add "JavaScript" to skills.
// 3. Change age to 21.
// 4. Convert the object back to JSON.
// 5. Print the final JSON.
const student = '{"name" : "karthi","dept" : "IT","age" : 20}';
const json = JSON.parse(student);
json.skills = "javascript";
json.age = 21;
console.log("Object...")
console.log(Object.values(json));
console.log("JSON...");
console.log(JSON.stringify(json))