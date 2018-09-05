const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map(journey => journey.startLocation);
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map(journey => journey.endLocation);
};

Traveller.prototype.getModesOfTransport = function () {
  return this.journeys.map(journey => journey.transport);
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter(journey => journey.transport === transport);
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter(journey => journey.distance < minDistance);
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  let total = 0; // refactor to sum
  this.journeys.map(journey => total += journey.distance);
  return total;
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  transportList = [];
  this.journeys.map(journey => transportList.push(journey.transport));
  return [ ...new Set(transportList) ];
};

module.exports = Traveller;
