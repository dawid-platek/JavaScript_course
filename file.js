// FUNKCJE

// I metoda stworzenia funkcji
function helloName(name) {

	let result = 'hello, ' + name
	return result
  
}

// II metoda stworzenia funkcji
const variableFunction = function(name){
	let result = 'hello, ' + name
	return result
}


// III metoda stworzenia funkcji (strzałdkowa)
const arrowFunction = (name) => {
	let result = 'hello, ' + name
	return result
}
let testName = 'test'

const result1 = variableFunction('Kuba')
console.log(result1)

const result2 = helloName(testName)
console.log(result2)

const resultFromArrowFunction = arrowFunction('arrow')
console.log(resultFromArrowFunction);
