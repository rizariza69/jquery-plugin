(function ($) {
	$.fn.emailValidator = function (email) {

		let regexValid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		return regexValid.test(email)
	}

	$('#email').keyup(function(){
		let value = $(this).val()
		// console.log(value);
		
		let validation = $.fn.emailValidator(value)
		// console.log(validation);
		if(validation){
			$(this).addClass("success")
			$('#err').text('Email Success').css('color','green')
		} else {
			$(this).addClass("error")
			$('#err').text('Email wrong format').css('color','red')
		}
		
		


	})

})(jQuery)
