
    // main-text 
    document.addEventListener('DOMContentLoaded',function(event){
      var dataText = [ "create next", "the new is not new", "Through Editism", "Through Archiving"];
      
      function typeWriter(text, i, fnCallback) {
        if (i < (text.length)) {
         document.querySelector(".title-move").innerHTML = text.substring(0, i+1);
    
          setTimeout(function() {
            typeWriter(text, i + 1, fnCallback)
          }, 100);
        }
        else if (typeof fnCallback == 'function') {
          setTimeout(fnCallback, 700);
        }
      }
       function StartTextAnimation(i) {
         if (typeof dataText[i] == 'undefined'){
            setTimeout(function() {
              StartTextAnimation(0);
            }, 1000);
         }
        if (i < dataText[i].length) {
         typeWriter(dataText[i], 0, function(){
           StartTextAnimation(i + 1);
         });
        }
      }
      StartTextAnimation(0);
    });
    
        