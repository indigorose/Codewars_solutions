const conversionTable = {
  cup: { gram: 240, ounce: 8.0, teaspoon: 48 },
  gram: { cup: 1 / 240, ounce: 0.0353, teaspoon: 0.2 },
  ounce: { cup: 0.125, gram: 28.35, teaspoon: 6 },
  teaspoon: { cup: 1 / 48, gram: 5, ounce: 0.167 },
}

const convertQuantity = (fromUnit) => (toUnit) => (quantity) => {
  const conversionRate = conversionTable[fromUnit][toUnit];
  return quantity * conversionRate;
}

const gramsResult = convertQuantity("cup")("gram")(2);
console.log(gramsResult);

const adjustForServings = (baseQuantity) => (newServings) =>
  baseQuantity * newServings;

const servingsResult = adjustForServings(4)(6);
console.log(servingsResult);

const processIngredient = (baseQuantity, baseUnit, newUnit, newServings) => {
  const adjustedQuantity = adjustForServings(baseQuantity)(newServings);
  const convertedQuantity =
    convertQuantity(baseUnit)(newUnit)(adjustedQuantity);
  return convertedQuantity.toFixed(2);
};
