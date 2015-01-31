
jQuery.fn.wordCount = function(params){
	var p = {
		counterElement:"display_count"
	};
	var total_words;
	
	if(params) {
		jQuery.extend(p, params);
	}
	
	//for each keypress function on text areas
	this.bind('input', function()
	{ 
		if($.trim($("#edit").val()) == "" ) {
			total_words = 0; 
		} else {
			total_words=this.value.split(/[\s\.\?]+/).length;
			jQuery('#'+p.counterElement).html(total_words);			
		}
	
	});	
};
$(document).ready(function(){
	$('#edit').wordCount();
	$('.dropdown')
	  .dropdown({
	    // you can use any ui transition
	    transition: 'drop'
	  })
	;
	$('.ui.accordion')
	  .accordion()
	;

});
