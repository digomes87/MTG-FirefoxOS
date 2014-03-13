// This Application has five modes: SPLASH, MENU, COUNTER, SEARCH, and MECHANICS
//
// Before the app is launched we use display: none to hide the modes so
// that Gecko will not try to apply CSS styles on those elements.
// We will remove display: none on elements when we need to display them.

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
    var views_splash    = $('#views-splash');
    var views_menu      = $('#views-menu');
    var views_counter   = $('#views-counter');
    var views_search    = $('#views-search');
    var views_mechanics = $('#views-mechanics');

    switch (mode) {

      case MODE_SPLASH :
        views_splash.removeClass('hidden');
        break;

      case MODE_MENU :
        views_menu.removeClass('hidden');
        views_menu.addClass('slidetoleft');
        break;

      case MODE_COUNTER :
        views_counter.removeClass('hidden');
        break;
      
      case MODE_SEARCH :
        views_search.removeClass('hidden');
        break;

      case MODE_MECHANICS :
        views_mechanics.removeClass('hidden');
        break;

      default :
        return;
    }

    if (callback)
        callback();
    }
};


function initiate(){
	this.ModeManager.start(MODE_SPLASH, showMenu());
}

function showMenu(){
  setInterval(function(){
    this.ModeManager.push(MODE_MENU);
  },3000);
}