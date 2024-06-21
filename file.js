function helloName(name) {

  let result = "hello, " + name
  return result

}

const variabeFunction = Function  ();{
  
}
let testName = "Test";

const result1 = helloName("Kuba");
console.log(result1);

const result2 = helloName(testName);
console.log(result2);


helloName(testName);
helloName();