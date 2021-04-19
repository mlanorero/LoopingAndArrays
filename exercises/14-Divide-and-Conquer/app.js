let list_of_numbers = [4, 80,	85,	59,	37,25,	5,	64,	66,	81,20,	64,	41,	22,	76,76,	55,	96,	2,	68];

// your code here
function mergeTwoList(integers) {
let odd = []
let even = []

    for(let i=0; i < integers.length; i++){
        if(integers[i] % 2 !== 0){
            odd.push(integers[i])
        } else {
            even.push(integers[i])
        }
    }
    return  [odd, even];
}

console.log(mergeTwoList(list_of_numbers))