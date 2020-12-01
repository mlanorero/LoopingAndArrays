let people = ['juan','ana','michelle','daniella','stefany','lucy','barak'];
let newArray = [];

function deletePerson(personName, i) {
    //your code here
    for(let i = 0; i < people.length; i++) {
        if(people[i] === personName){
            return people.splice(people, i)
             
        }
    }
    return newArray.push(people)
}


console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));