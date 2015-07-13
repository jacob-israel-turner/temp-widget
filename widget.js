void function(window, document){
  'use strict';
  window.onload = widget;
  function widget(){
    var hook = document.getElementById('cancer-spot-widget');
    if(!hook) {
      console.warn("No element with 'cancer-spot-widget' id found.  Aborting widget script.")
      return;
    }
    hook.innerHTML = "<h1>WIDGET WORKEDDD!!!";
  }
}(window, document)