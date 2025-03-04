/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const oneDayCost = 40;
  let totalCost = oneDayCost * days;

  if (days < 3) {
    return totalCost;
  }

  if (days < 7) {
    return (totalCost -= 20);
  }

  return (totalCost -= 50);
}

module.exports = calculateRentalCost;

/*

Кожен день 40$
7 або більше днів 50$ знижки на сумму
на 3 або більше днів, ви отримаєте знижку $20 на загальну суму.

Examples:

calculateRentalCost(1); // 40
calculateRentalCost(3); // 100
calculateRentalCost(7); // 230

*/
