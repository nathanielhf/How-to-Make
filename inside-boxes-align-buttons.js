  $(window).on('load', function(){
  	if (window.matchMedia("(min-width: 1024px)").matches) { 
//         console.log("window loaded!");
        // get heights of divs containing buttons
        var topicsHeight = parseInt($('#blog-topics').css('height'), 10);
        var interviewsHeight = parseInt($('#blog-interviews').css('height'), 10);
        var difference;

//         console.log('topicsHeight: ' + topicsHeight);
//         console.log('interviewsHeight: ' + interviewsHeight);

        // evaluate which one is taller
        // take difference
        // add to margin-top of bottom cta button
        if (interviewsHeight > topicsHeight) {
            difference = interviewsHeight - topicsHeight;          	
       			$('#blog-topics .single-column:last-child a.cta_button').css('marginTop', difference - 15 + "px");
        } else {
            difference = topicsHeight - interviewsHeight;
          	// add difference +5 to account for height difference AND margin on single-column
          	$('#blog-interviews a.cta_button').css('marginTop', difference + 10 + "px");
        }

        


//         console.log(difference);
    }
});
