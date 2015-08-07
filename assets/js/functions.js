$(function(){
    $(".mobile-nav-toggle, .close-btn").on('click', function(event){
        $(".mobile-nav").toggleClass("active");
        $(".mobile-nav-toggle").toggleClass("active");
    });

  //the below function allows user to click within the div but outside the area of the links to close the mobile navigation

        $(".mobile-nav").on({
        	click: function (event) {
        		if (event.target == this){
        			$(".mobile-nav").removeClass("active");
        			$(".mobile-nav-toggle").removeClass("active");
        		}
        	}

    });
});
