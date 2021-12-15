
const drivers=[['Antonia', 'Nuru', 'Amari', 'Claudia']]
const returnFirstTwoDrivers=function(drivers){;return drivers.slice(0,2)}

const returnLastTwoDrivers=function(drivers){return drivers.slice(-2)}
const selectingDrivers=[returnLastTwoDrivers(drivers),returnFirstTwoDrivers(drivers)]
//console.log(selectingDrivers)
const createFareMultiplier=function(fareMultiplier) {return function(x){return fareMultiplier*x}}
const fareDoubler= createFareMultiplier(2)
const fareTripler= createFareMultiplier(3)
//console.log(fareDoubler)
function selectingDifferentDrivers(drivers,y){return y(drivers)};
console.log(selectingDifferentDrivers(drivers,returnFirstTwoDrivers))
