import { readFileSync } from "fs";

interface Person {
  age:number;
  heigth:number;
}

function getStatistics():Person[] {
  const persons: Person[] = JSON.parse(readFileSync("./persons.json").toString());
  return persons;
}

function displayResult() {
  console.log(getStatistics());
}
displayResult();
