var people = ['juan','ana','michelle','daniella','stefany','lucy','barak'];

function deletePerson(personName)
{
    //your code here
     for( let i = 0; i < people.length; i++){ 
    
        if ( people[i] === personName) { 
    
            people.splice(i, 1);
            return people; 
        }
    
    }
}

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));