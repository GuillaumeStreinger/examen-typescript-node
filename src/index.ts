import { readFileSync } from "fs";

interface Person {
  age: number;
  height: number;
}

interface Statistics {
  meanAge: number;
  meanHeight: number;
}

function getStatistics(): Statistics | null {
  const persons: Person[] = JSON.parse(readFileSync("./persons.json").toString());

  // Vérifier si le tableau est vide ou si le premier élément ne possède pas les propriétés 'age' et 'height'
  if (persons.length === 0 || persons[0].age === undefined || persons[0].height === undefined) {
    console.error("Erreur : Les données du fichier persons.json ne sont pas correctement formées.");
    return null; // Retourne null pour indiquer une erreur
  }

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
  if (stats) {
    console.log(`Moyenne d'âge : ${stats.meanAge.toFixed(2)}, Moyenne de taille : ${stats.meanHeight.toFixed(2)} cm`);
  } else {
    console.log("Impossible d'afficher les résultats en raison d'une erreur dans les données.");
  }
}

displayResult();
