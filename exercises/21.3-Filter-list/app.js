let names = ['Liam', 'Emma', 'Noah', 'Olivia', 'William', 'Ava', 'James', 'Isabella', 'Logan', 'Sophia', 'Benjamin', 'Mia', 'Mason', 'Charlotte', 'Elijah', 'Amelia', 'Oliver', 'Evelyn', 'Jacob', 'Abigail', 'Lucas', 'Harper', 'Michael', 'Emily', 'Alexander', 'Elizabeth', 'Ethan', 'Avery', 'Daniel', 'Sofia', 'Matthew', 'Ella', 'Aiden', 'Madison', 'Henry', 'Scarlett', 'Joseph', 'Victoria', 'Jackson', 'Aria', 'Samuel', 'Grace', 'Sebastian'];

//declare your function here
function filterByName(arr, str) {
    let array = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].toLowerCase().includes(str)) {
            array.push(arr[i]);
        }
    }
    return array;
}

console.log(filterByName(names, 'am'));