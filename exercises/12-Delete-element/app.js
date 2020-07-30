var people = ['juan','ana','michelle','daniella','stefany','lucy','barak'];
let newPeople = []

function deletePerson(personName)
{
    //your code here
    for(let i = 0; i < people.length; i++){
        if( people[i] === personName){
           people.slice(people[i], 1)
        }
            }
    newPeople.push(people)
    return newPeople
}

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));