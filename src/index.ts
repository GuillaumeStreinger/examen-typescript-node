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

  // Calcul de la somme totale des âges et des tailles
  const totals = persons.reduce((acc, person) => {
    acc.totalAge += person.age;
    acc.totalHeight += person.height;
    return acc;
  }, { totalAge: 0, totalHeight: 0 });

  // Calcul de l'âge moyen et de la taille moyenne
  const meanAge = totals.totalAge / persons.length;
  const meanHeight = totals.totalHeight / persons.length;

  // Retour d'un objet avec l'âge moyen et la taille moyenne
  return { meanAge, meanHeight };
}

function displayResult() {
  const stats = getStatistics();
  console.log(`Moyenne d'âge : ${stats.meanAge.toFixed(2)}, Moyenne de taille : ${stats.meanHeight.toFixed(2)} cm`);
}

displayResult();
