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
