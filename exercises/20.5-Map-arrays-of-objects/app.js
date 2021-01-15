let people = [
	{ name: 'Joe', birthDate: new Date(1986,10,24) },
	{ name: 'Bob', birthDate: new Date(1975,5,24) },
	{ name: 'Erika', birthDate: new Date(1989,6,12) },
	{ name: 'Dylan', birthDate: new Date(1999,12,14) },
	{ name: 'Steve', birthDate: new Date(2003,4,24) }
];

//let nacimiento = people.map(function(años){   
//     new Date().getFullYear() - años.birthDate.getFullYear();
//});
let nacimiento = function(cumple){
	return new Date().getFullYear() - cumple.birthDate.getFullYear();
};
let years = people.map(nacimiento); 

let simplifier = function(person){
	return "Hello my name is " + person.name + " and I am " + years + " years old.";
};


console.log(people.map(simplifier));

