const superHeroes = require('./super-heroes.json');

/* Will find all of the marvel characters in the data and return them as an array */

const getMarvelHeroes = (heroes) => {
  return heroes.filter(hero => hero.publisher === 'Marvel')
}
/* Coverts super hero data so it is grouped the publisher property */

const groupByPublisher = (heroes) => {
  return heroes.reduce((groupedObj, hero) => {
    if (hero.publisher) {
      groupedObj[hero.publisher].push(hero)
    } else {
      groupedObj[hero.publisher] = []
      groupedObj[hero.publisher].push(hero)
    }
    return groupedObj
  }, { 'Marvel': [], 'DC': [] })
}

const groupByPublisher = (heroes) => {
  return heroes;
}
getMarvelHeroes();


//Returns and array of DC Comic heroes that have more than 1 character



const getDCHeroesWithMoreThanOneCharacter = (heroes) => {
  return heroes;
}

module.exports = {
  convertCharactersToArray,
  getDCHeroes,
  getDCHeroesWithMoreThanOneCharacter,
  groupByPublisher,
}
