let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = false;

const runnerAge = 20;

if (runnerAge > 18 && registeredEarly) {
   raceNumber += 1000;
}
if (runnerAge > 18 && registeredEarly) {
  console.log(`You will race at 9:30 am and your race number is ${raceNumber}`);
} else if (runnerAge > 18 && !registeredEarly) {
  console.log(`You will race at 11:00 am and your race number is ${raceNumber}`);
} else if (runnerAge < 18) {
  console.log(`You will rune at 12:30 pm and your race number is ${raceNumber}`);
} else if (runnerAge === 18) {
  console.log ('Please see registration desk');
}
