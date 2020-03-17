function dynamicSort(property) {
  var sortOrder = 1;

  if (property[0] === "-") {
    sortOrder = -1;
    property = property.substr(1);
  }

  return function(a, b) {
    if (sortOrder == -1) {
      return b[property].localeCompare(a[property]);
    } else {
      return a[property].localeCompare(b[property]);
    }
  };
}

//The code above was take from an external source
//https://ourcodeworld.com/articles/read/764/how-to-sort-alphabetically-an-array-of-objects-by-key-in-javascript

export const AZ = array => {
  return array.sort(dynamicSort("title"));

};

export const ZA = arr => {
  return arr.sort(dynamicSort("title")).reverse();
};

export const lowestFirst = array => {
  return array.sort(function(a, b) {
    return parseInt(a.price) - parseInt(b.price);
  });
};

export const highestFirst = array => {
  return array
    .sort(function(a, b) {
      return parseInt(b.price) - parseInt(a.price);
    })
    
};
