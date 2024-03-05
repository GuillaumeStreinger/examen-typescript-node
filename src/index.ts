import { readFileSync } from "fs";
interface Person {
  age: number | string | null;
  height: number | string | null;
}

interface Statistics {
  meanAge: number;
  meanHeight: number;
}

function getStatistics(): Statistics {
  const persons: Person[] = JSON.parse(readFileSync("./persons.json").toString());

  // Filtrer les personnes avec des âges et des tailles valides, puis calculer les totaux
  const validPersons = persons.filter(person => 
    typeof person.age === 'number' && person.age > 0 && 
    typeof person.height === 'number' && person.height > 0
  );

  const totals = validPersons.reduce((acc, person) => {
    acc.totalAge += person.age as number;
    acc.totalHeight += person.height as number;
    return acc;
  }, { totalAge: 0, totalHeight: 0 });

  // Calcul de l'âge moyen et de la taille moyenne
  const meanAge = validPersons.length > 0 ? totals.totalAge / validPersons.length : 0;
  const meanHeight = validPersons.length > 0 ? totals.totalHeight / validPersons.length : 0;

  // Retour d'un objet avec l'âge moyen et la taille moyenne
  return { meanAge, meanHeight };
}

function displayResult() {
  const stats = getStatistics();
  console.log(`Moyenne d'âge : ${stats.meanAge.toFixed(2)}, Moyenne de taille : ${stats.meanHeight.toFixed(2)} cm`);
}

displayResult();
