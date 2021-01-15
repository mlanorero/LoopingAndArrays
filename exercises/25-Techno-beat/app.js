let string = '';

function lyricsGenerator (arr){
    for(let i = 0; i < arr.lenght; i++){
        if(arr[i] === 0){
            string = 'Boom';
        } else if( arr[i] === 1){
            string = 'Drop the base';
        } 
    }
    return array;
}
// test Data
console.log(lyricsGenerator([0,0,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,0]))
console.log(lyricsGenerator([1,0,1]))
console.log(lyricsGenerator([1,1,1]))