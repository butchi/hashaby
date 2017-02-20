import ns from './module/ns';

// hashaby.allowDomain(/0\.0\.0\.0/);
hashaby.allowDomain('butchi.github.io');
hashaby.doWith(window.licker);

ns.clearHash = function() {
  hashaby.clearHash();
};

ns.showMessage = function() {
  alert('Thanks, world!');
};

ns.showArg = function(arg) {
  alert('Argument: ' + arg);
};

ns.showArgs = function() {
  alert('Arguments: ' + [].join.call(arguments, ','));
};
