#Day 7 - Cardio Day 2

//array sem heldur objects
const people = [  
      { name: 'Wes', year: 1988 },
      { name: 'Kait', year: 1986 },
      { name: 'Irv', year: 1970 },
      { name: 'Lux', year: 2015 }
    ];
	
// pleople.some checkar ef eitthver er yfir 19
const isAdult = people.some(person => {  
  const currentYear = new Date().getFullYear()
  return currentYear - person.year >= 19
})
console.log({ isAdult })  
//true

// pleople.some checkar ef allir er yfir 19
const allAdult = people.every(  
  person => new Date().getFullYear() - person.year >= 19,
)
console.log({ allAdult })  
//false

//array sem heldur objects
const comments = [  
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 },
]

//finnur object sem heldur id 823423 og skilar objectnum
const findElement = comments.find(comment => comment.id === 823423)  
console.log(findElement)  
//{text: "Super good", id: 823423}

//hér eyðir object með id 823423
const elementID = comments.findIndex(comment => comment.id === 823423)  
comments.splice(elementID, 1)  
console.log(comments) 
/*
0: {text: "Love this!", id: 523423}
1: {text: "You are the best", id: 2039842}
2: {text: "Ramen is my fav food ever", id: 123523}
3: {text: "Nice Nice Nice!", id: 542328}
*/
	
#Day 14 - Object and Arrays - Reference VS Copy

//age2 er buið að gera copy af age sem var 100 
//áður en það var breytt í 200
let age = 100  
let age2 = age  
console.log(age, age2)  
//100 100
age = 200  
console.log(age, age2)  
//200

// team er ekki copy af player heldur það bendir á players 
// þess vegna breytist players þegar þú breytir team
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy']  
const team = players  
console.log(players, team)  
//(4) ["Wes", "Sarah", "Ryan", "Poppy"] (4) ["Wes", "Sarah", "Ryan", "Poppy"]
team[3] = "Lux"  
console.log(players, team)  
//(4) ["Wes", "Sarah", "Ryan", "Lux"] (4) ["Wes", "Sarah", "Ryan", "Lux"]

//hérna býrðu till copy af players með að nota spread
const team = [...players] 

// núna er team orðir copy af players og núna þegar þú breytir team 
// þá hefur þú ekki áhrif á players
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy']  
const team = [...players]  
console.log(players, team)  
//(4) ["Wes", "Sarah", "Ryan", "Poppy"] (4) ["Wes", "Sarah", "Ryan", "Poppy"]
team[3] = "Lux"  
console.log(players, team)  
//(4) ["Wes", "Sarah", "Ryan", "Poppy"] (4) ["Wes", "Sarah", "Ryan", "Lux"]

//aðrar að ferðir til þess að búa til copy af players 

const team2 = players.slice()  
const team3 = [].concat(players)  
const team4 = Array.from(players)  

//object virka eins og array
// me er reference ekki copy
const person = {  
  name: 'Stef Cola',
  age: 80,
}
const me = person  
console.log(person, me) 
//{name: "Stef Cola", age: 80} {name: "Stef Cola", age: 80} 
me.age = 30  
console.log(person, me)  
//{name: "Stef Cola", age: 30} {name: "Stef Cola", age: 30}

#Day 17 - Sorting Band Names without Articles


//hér er bara array með lista af hljómsveitum
const bands = [  
  'The Plot in You',
  'The Devil Wears Prada',
  'Pierce the Veil',
  'Norma Jean',
  'The Bled',
  'Say Anything',
  'The Midway State',
  'We Came as Romans',
  'Counterparts',
  'Oh, Sleeper',
  'A Skylit Drive',
  'Anywhere But Here',
  'An Old Dog',
]

//function sem tekur a an og the úr string 
//hefur ekki áhrif á bands
// /i gerir þetta ekki case sensitive
function strip(bandname) {  
  return bandname.replace(/^(a |the |an)/i, '').trim()
}

//setur Band í stafrófs röð
// kallar srip function svo að það hugsar ekki um a an the
const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1)  

// gerir það sama og fyrra sortedBands þetta r bara læsilegra
//en ekki ein snirtilegt og tekur fleyrri línur
const sortedBands = bands.sort(function (a, b){  
  if(strip(a) > strip(b) {
    return 1
  } else {
    return -1
  }
})

//setur hlut inn í html með id bands
//map(band => `<li>${band}</li>`) lætur hvert einasta intak
//í array bands í sitt eigin lista holf
//join('') losar við , því að þegar þú setur þetta í html 
//lesur html þetta sem streng og setur , á milli inntök í bands
document.querySelector('#bands').innerHTML =  
  sortedBands
    .map(band => `<li>${band}</li>`)
    .join('');