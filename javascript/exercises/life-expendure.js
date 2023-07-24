function calculatePercentageOfLifeLived(dateOfBirth, lifeExpectancy) {
  const dateOfBirthObj = new Date(dateOfBirth);
  const currentDateObj = new Date();

  const lifeTime = currentDateObj.getTime() - dateOfBirthObj.getTime();
  const lifeTimeInYears = lifeTime / (1000 * 60 * 60 * 24 * 365.25);

  const percentageLived = (lifeTimeInYears / lifeExpectancy) * 100;
  return percentageLived.toFixed(2); // Returns the percentage with two decimal places
}

const dateOfBirth = "1992-05-25";
const lifeExpectancy = 80; // Life expectancy in years

const percentageLived = calculatePercentageOfLifeLived(
  dateOfBirth,
  lifeExpectancy
);
console.log(`You have lived ${percentageLived}% of your life.`);
