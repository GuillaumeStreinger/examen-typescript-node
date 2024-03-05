import { readFileSync } from "fs";

interface Person {
  age:number;
  heigth:number;
}

function getStatistics(): number {
  const persons: Person[] = JSON.parse(readFileSync("./persons.json").toString());
  const maxAge = persons.reduce((max, person) => person.age > max ? person.age : max, 0);
  return maxAge;
}

function displayResult() {
  console.log(getStatistics());
}
displayResult();
