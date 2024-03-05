import { readFileSync } from "fs";

interface Person {
  age:number;
  height:number;
}

interface Statistics {
  meanAge: number;
  meanHeight: number;
}

function getStatistics(): Statistics {
  const persons: Person[] = JSON.parse(readFileSync("./persons.json").toString());
  const totalAge = persons.reduce((sum, person) => sum + person.age, 0);
  const meanAge = totalAge / persons.length;
  const totalHeight = persons.reduce((sum, person) => sum + person.height, 0);
  const meanHeight = totalHeight / persons.length;
  return { meanAge, meanHeight };
}

function displayResult() {
  console.log(getStatistics());
}
displayResult();
