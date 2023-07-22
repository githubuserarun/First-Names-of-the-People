var peopleList = require("../country/state/city/index.js");
var getFirstName = require("../utilities/utils/index.js");
const getPeopleInCity = (peopleList) => {
  return getFirstName(peopleList);
};

module.exports = getPeopleInCity;
