let parking_state = [
  [1,1,1],
  [0,0,0],
  [1,1,2]
]
const state = {
     totalSlots: 0,
     availableSlots: 0,
     occupiedSlots: 0
}

function getParkingLotState(value){
    for(let i = 0; i < value.length; i++){
        for(let x = 0; x < value[i].length; x++){
            for(let j = 0; j< value[i][x].length; j++){
                if(i || x || j === 0) {
                    state.totalSlots += 1;
                }
                if(i || x  || j === 1){
                    state.availableSlots += 1;
                }
                if(i || x || j === 2) {
                    state.occupiedSlots += 1;
                }
            }
        }
    }
    return state;
}
console.log(getParkingLotState(parking_state))