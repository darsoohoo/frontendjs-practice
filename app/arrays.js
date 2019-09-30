exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item)
  },

  sum: function(arr) {
    let total = 0
    for (let i = 0; i < arr.length; i++) {
      total = total + arr[i]
    }
    return total;
 
  },

  remove: function(arr, item) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
      if (item !== arr[i]) {
        newArray.push(arr[i])
      }
    }
    return newArray;
  },

  removeWithoutCopy: function(arr, item) {
    for (let i = 0; i < arr.length; i++) {
      if( item === arr[i]) {
        arr.splice(i,1)
        i--
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
    arr.shift()
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  //wrong
  insert: function(arr, item, index) {
    arr.splice(index, 0, item)
    return arr;
  },

  count: function(arr, item) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        count++
      }
    }
    return count;
  },

  duplicates: function(arr) {
    let dups = []
    let temp
    for (let i = 0; i < arr.length; i++) {
      for (let j = i +1; j < arr.length; j++) {
        if (arr[i] === arr[j] && arr[i] !== temp) {
          dups.push(arr[i])
          temp = arr[i]
        }
      }
    }
    return dups;
  },

  square: function(arr) {
    return arr.map(item => item * item)
  },

  findAllOccurrences: function(arr, target) {
    let occurences = []
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        occurences.push(i)
      }
    }
    return occurences;
  }
};
