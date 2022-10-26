let origDogs=["Bulldog","Beagle","Labrador"];
let cats=new Array("American Curl","Bengal");
let birds=new Array("falson","Ducks","flamingoes");

//Array copy Elements
let sliceDogs=origDogs.slice(0,3);
//console.log(sliceDogs);
let copyDogs=[...origDogs];
//console.log(copyDogs);
let dogs=origDogs.slice(0);
console.log(dogs);

//Stack Functions(LIFO) push and pop
let pushDogs=origDogs.push("golden retriever");
let popDog=origDogs.pop();
//console.log(popDog);
origDogs[origDogs.length]="Poodle";
//console.log(origDogs);

//Add and Remove from First
let addFirst=origDogs.unshift("German Shephard");
//console.log(origDogs);
let shiftDog=origDogs.shift();
//console.log(origDogs);

//Atomic add and remove elements(where, how many to remove,element list)
origDogs.splice(2,1,"Pug","Boxer");
//console.log(origDogs);

//Array Function -Concat,Spread,Slice and sort
let animals=dogs.concat(cats,birds);
console.log(animals);
let newAnimal=[...dogs,...cats,...birds].toString();
console.log(newAnimal);

let sortDog=dogs.slice(0).sort();
console.log(sortDog);

function scanArray([first,second]){
    console.log("scan: "+first+" "+second);
}
scanArray(animals);

let joinAnimals=animals.join(" ");
let allAnimals="";

for(let animal of animals)
allAnimals+=animal+" ";
console.log("Animals : "+allAnimals);



