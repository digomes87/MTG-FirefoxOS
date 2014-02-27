// This Application has five modes: TILES, SEARCH, LIST, SUBLIST, and PLAYER
// Search has two "modes", depending on whether we came from TILES or LIST.
//
// Before the Music app is launched we use display: none to hide the modes so
// that Gecko will not try to apply CSS styles on those elements which seems are
// actions that slows down the startup time we will remove display: none on
// elements when we need to display them.
var MODE_SPLASH = 1;
var MODE_MENU = 2;
var MODE_COUNTER = 3;
var MODE_SEARCH= 4;
var MODE_MECHANICS = 5;

var ModeManager = {
  _modeStack: [],

  get currentMode() {
    return this._modeStack[this._modeStack.length - 1];
  },

  start: function(mode, callback) {
    this._modeStack = [mode];
    this._updateMode(callback);
  },

  push: function(mode, callback) {
    this._modeStack.push(mode);
    this._updateMode(callback);
  },

  pop: function() {
    if (this._modeStack.length <= 1)
      return;
    this._modeStack.pop();
    this._updateMode();
  },

  _updateMode: function(callback) {
    var mode = this.currentMode;

    if (mode === MODE_SPLASH) {
      document.getElementById('views-splash').classList.remove('hidden');
    }
    else {
    	if (mode === MODE_MENU)
        	document.getElementById('views-menu').classList.remove('hidden');
      	else 
      	 	if (mode === MODE_COUNTER)
           		document.getElementById('views-counter').classList.remove('hidden');
      	    else
      	        if (mode === MODE_SEARCH) 
        		    document.getElementById('views-search').classList.remove('hidden');
        			else
        				if(mode === MODE_MECHANICS)
        					document.getElementById('views-mechanics').classList.remove('hidden');
	}

    if (callback)
        callback();
    }
};


function animateMenu(){
	this.ModeManager.start(1);
}