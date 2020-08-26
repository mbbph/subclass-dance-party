var MargaritaDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('margarita');
};

MargaritaDancer.prototype = Object.create(Dancer.prototype);
MargaritaDancer.prototype.constructor = MargaritaDancer;


MargaritaDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
};
