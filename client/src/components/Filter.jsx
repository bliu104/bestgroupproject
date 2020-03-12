export const searchByColor = (array, color) => {
  let arrayColor = array.filter(item => {
    return Object.values(item).includes(color);
  });

  return arrayColor;
};

export const searchByCondition = (array, condition) => {
  let arrayConditon = array.filter(item => {
    return Object.values(item).includes(condition);
  });

  return arrayConditon;
};

export const searchByPrice = (array, price) => {
  let parser = array.map(item => {
    item.price = parseInt(item.price);
    return item;
  });

  let arrayPrice = [];
  parser.map(item => {
    if (item.price <= price) {
      arrayPrice.push(item);
    }
  });

  return arrayPrice;
};

export const uniqueColor = array => {
  let arrayColor = [];
  array.map(items => {
    if (!arrayColor.includes(items.color)) {
      arrayColor.push(items.color);
    }
  });
  return arrayColor;
};

export const uniqueCondition = array => {
  let conditionArray = [];
  array.map(items => {
    if (!conditionArray.includes(items.condition)) {
      conditionArray.push(items.condition);
    }
  });
  return conditionArray;
};
