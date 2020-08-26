var TacoDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('tacobell');
};

TacoDancer.prototype = Object.create(Dancer.prototype);
TacoDancer.prototype.constructor = TacoDancer;

TacoDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);


};
