// FUNKCJE - zadanie

function fullName (firstName, lastName) {
  return firstName + " " + lastName
}


const fullName2 = function (firstName, lastName){
  return firstName + " " + lastName
}

const fullName3 = (firstName, lastName) => {
  return firstName + " " + lastName
}

console.log(fullName("imie", "nazwisko"));
console.log(fullName2("imie", "nazwisko"));
console.log(fullName3("imie", "nazwisko"));

