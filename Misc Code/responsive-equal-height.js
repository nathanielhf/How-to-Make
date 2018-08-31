$(window).on('load', function(){
  
  if (window.matchMedia("(min-width: 767px)").matches) { 
      // get all hs-rss-items
      // save in array ==>> no it's actually a node list
      var alignedButtons = document.getElementsByClassName('align-buttons-here');
      var tallestButtonParent;
      var tallestHeight = 0;

      // loop through node list, find tallest one
      for (var i = 0; i < alignedButtons.length; i++) {

          var itemHeight = alignedButtons[i].offsetHeight;

          if (itemHeight > tallestHeight) {
              tallestButtonParent = alignedButtons[i];
              tallestHeight = itemHeight;
          }
      }

      console.log("Tallest Item is: " + tallestButtonParent + ", with a height of " + tallestHeight);

      // find difference between tallest and heights of other items
      for (var i = 0; i < alignedButtons.length; i++) {

          var itemHeight = alignedButtons[i].offsetHeight;

          var difference = tallestHeight - itemHeight;

          console.log(itemHeight);
          console.log(difference);
          // add that difference to <a> button as margin-top//     
          // add 36 to maintain space between button and above text on tallest div	
          alignedButtons[i].querySelector('.align-buttons-here a').style.marginTop = difference + "px";
          console.log(itemHeight);
      }
    
    }

});