var people = ['juan','ana','michelle','daniella','stefany','lucy','barak'];
//let newPeople = [];

function deletePerson(personName)
{
    //your code here
    //newPeople.push(people);
    //console.log(newPeople);
    for(let i = 0; i < people.length; i++){
        if(people[i] === personName){
            return people.splice(i, 1);
        }
        return people;
    }
   
}

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));