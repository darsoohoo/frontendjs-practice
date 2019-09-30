exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item)
  },

  sum: function(arr) {
    return arr.reduce(function(a, b) {
      return a + b;
    })
  },

  remove: function(arr, item) {
    let newArr = [];

    for ( let i = 0; i < arr.length; i++) {
      if (arr[i] !== item) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  },

  removeWithoutCopy: function(arr, item) {
    for ( let i = 0; i < arr.length; i++) {
      if ( arr[i] === item ) {
        arr.splice(i, 1)
        i--;
      }
    }
    return arr;
  },

  append: function(arr, item) {
      arr.push(item)
    return arr;
  },

  truncate: function(arr) {
   arr.pop()
   return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item)
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2)
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item)
    return arr;
  },

  count: function(arr, item) {
    let count = 0
    for ( let i = 0; i < arr.length; i++){
      if (item === arr[i]) {
        count++
      }
    }
    return count;
  },

  duplicates: function(arr) {
    let sortedArr = arr.sort()
    let results = []
    let temp
    for( let i = 0; i < sortedArr.length; i++) {
      for ( let j = i + 1; j < sortedArr.length; j++) {
        if ( sortedArr[i] === sortedArr[j]) {
          if (sortedArr[i] !== temp){
            results.push(sortedArr[i])
            temp = sortedArr[i]
          }
        }
      }
    }
    return results;
  },

  square: function(arr) {
      let itemSquared = arr.map(item => item * item)
      return itemSquared;
  },

  findAllOccurrences: function(arr, target) {
    
    let occurence = []
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        occurence.push(i)
      }
    }
    return occurence;
  }
};
