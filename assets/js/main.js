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
        
    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	