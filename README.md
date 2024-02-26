# Partiel IW4 TypeScript (2/2) : examen pratique

## Mise en place

### Installation des dépendances

```
npm install
```

### Exécution

Exécuter le programme :

```
npm run build && npm run start
```

Le programme exécute les instructions du fichier `src/index.ts`, c'est à dire afficher la valeur de retour de la fonction `getStatistics` (initialement, `undefined`).

## Questions

Créer un commit après avoir implémenté chacun des étapes suivantes :

1. Annoter la valeur de retour de la fonction `getStatistics` pour indiquer qu'elle doit retourner un nombre.
2. Annoter la constante `persons` pour indiquer son type.
3. Modifier la fonction `getStatistics` pour qu'elle retourne l'âge maximal des personnes du fichier `persons.json`.
4. Modifier l'annotation de typage de la valeur de retour de la fonction `getStatistics` pour indiquer qu'elle doit retourner un objet avec les propriétés `meanAge` et `meanHeight` (toutes deux des nombres).
5. Modifier la fonction `getStatistics` pour qu'elle retourne un objet avec ces deux propriétés (âge moyen et taille moyenne des personnes).

Modifiez le fichier `persons.json` en renommant la propriété `height` en `taille`, puis constatez que le programme échoue sans émettre d'erreur (il indique `NaN` pour la taille moyenne). Ceci signifie que le type supposé de la constante `persons` ne couvre pas tous les cas possibles.

6. Modifier l'annotation de typage de la constante `persons` pour couvrir tous les cas possibles.
7. Modifier la fonction `getStatistics` pour qu'elle affiche un message d'erreur si les données du fichier `persons.json` ne sont pas correctement formées.

_Aide : vous pourrez vérifier que le premier élément du tableau `persons` dispose des propriétés `age` et `height` avec la méthode `hasOwnProperty`._