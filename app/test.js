function findAllOccurrences(arr, target) {
    
    let occurence = []
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        occurence.push(i)
      }
    }
    return occurence;
}



 console.log(findAllOccurrences([ 1, 2, 3, 4, 5, 6, 1, 7], 1))