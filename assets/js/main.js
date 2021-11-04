(function ($) {
	"use strict";

	$("header .menu ul li:has(ul)").addClass("has-submenu");

    jQuery(document).ready(function($){

    	// Slicknav
		$('#main-menu').slicknav({
	        closeOnClick: true,
	        label: '',
	        appendTo:'.mobile-menu',
	    });


        $('#team-single-section .tab:not(:first)').hide();
        $('#team-single-section .tab-buttons a').click(function(){
            $("#team-single-section .tab-buttons a").removeClass("active");
            $(this).addClass("active");
            $('#team-single-section .tab').hide();
            $('#team-single-section #tab-'+$(this).attr('data-index')).fadeIn();
        });


		// Google Map
	    var myCenter = new google.maps.LatLng(51.258905, -0.156246);

        function initialize() {
            var mapProp = {
                center: myCenter,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                styles: [
                            
                        ]
          };

            var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

            var marker = new google.maps.Marker({
                position: myCenter,
                icon: ''
            });

            marker.setMap(map);
        }

        google.maps.event.addDomListener(window, 'load', initialize);
        
    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	