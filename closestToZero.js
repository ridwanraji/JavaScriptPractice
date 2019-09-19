// A function that find the value of an array closest to zero
function computeClosestToZero (ts) {
  
    // When array is empty, return 0
    if(ts.length === 0){
        return 0
    }
    
    // let closest be the first element in the array
    let closest = ts[0]
    
    //loop through the array
    for(let i=0; i < ts.length; i++){
      
      // if array element is positive and less than the closest element
      // then array element is closest to zero
        if(ts[i] > 0 && ts[i] <= Math.abs(closest)) {
            closest = ts[i]
        }
          // if array element is negative and less than the negative of the closest element
      // then array element is closest to zero
      else if(ts[i] < 0 && -ts[i] <= Math.abs(closest)){
        closest = ts[i]
      }
    }
    return closest
    
  }
  
  let test = computeClosestToZero([-5,-1,5,9,2,4])
  
  console.log(test)