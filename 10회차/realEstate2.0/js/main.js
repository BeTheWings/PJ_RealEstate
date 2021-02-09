(function ($) {
	"use strict";

	// Preloader
	$(window).on('load', function () {
		if ($('#preloader').length) {
			$('#preloader').delay(100).fadeOut('slow', function () {
				$(this).remove();
			});
		}
	});

	// Back to top  
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('.back-to-top').fadeIn('slow');
		} else {
			$('.back-to-top').fadeOut('slow');
		}
	});
	$('.back-to-top').click(function () {
		$('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
		return false;
	});

	var nav = $('nav');
	var navHeight = nav.outerHeight();

	/*--/ ScrollReveal /Easy scroll animations for web and mobile browsers /--*/
	window.sr = ScrollReveal();
	sr.reveal('.foo', { duration: 1000, delay: 15 });

	/*--/ Carousel owl /--*/
	$('#carousel').owlCarousel({
		loop: true,
		margin: -1,
		items: 1,
		nav: true,
		navText: ['<i class="ion-ios-arrow-back" aria-hidden="true"></i>', '<i class="ion-ios-arrow-forward" aria-hidden="true"></i>'],
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true
	});

	/*--/ Animate Carousel /--*/
	$('.intro-carousel').on('translate.owl.carousel', function () {
		$('.intro-content .intro-title').removeClass('zoomIn animated').hide();
		$('.intro-content .intro-price').removeClass('fadeInUp animated').hide();
		$('.intro-content .intro-title-top, .intro-content .spacial').removeClass('fadeIn animated').hide();
	});

	$('.intro-carousel').on('translated.owl.carousel', function () {
		$('.intro-content .intro-title').addClass('zoomIn animated').show();
		$('.intro-content .intro-price').addClass('fadeInUp animated').show();
		$('.intro-content .intro-title-top, .intro-content .spacial').addClass('fadeIn animated').show();
	});

	/*--/ Navbar Collapse /--*/
	$('.navbar-toggle-box-collapse').on('click', function () {
		$('body').removeClass('box-collapse-closed').addClass('box-collapse-open');
	});
	$('.close-box-collapse, .click-closed').on('click', function () {
		$('body').removeClass('box-collapse-open').addClass('box-collapse-closed');
		$('.menu-list ul').slideUp(700);
	});

	/*--/ Navbar Menu Reduce /--*/
	$(window).trigger('scroll');
	$(window).bind('scroll', function () {
		var pixels = 50;
		var top = 1200;
		if ($(window).scrollTop() > pixels) {
			$('.navbar-default').addClass('navbar-reduce');
			$('.navbar-default').removeClass('navbar-trans');
		} else {
			$('.navbar-default').addClass('navbar-trans');
			$('.navbar-default').removeClass('navbar-reduce');
		}
		if ($(window).scrollTop() > top) {
			$('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
		} else {
			$('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
		}
	});

	/*--/ Property owl /--*/
	$('#property-carousel').owlCarousel({
		loop: true,
		margin: 30,
		responsive: {
			0: {
				items: 1,
			},
			769: {
				items: 2,
			},
			992: {
				items: 3,
			}
		}
	});

	/*--/ Property owl owl /--*/
	$('#property-single-carousel').owlCarousel({
		loop: true,
		margin: 0,
		nav: true,
		navText: ['<i class="ion-ios-arrow-back" aria-hidden="true"></i>', '<i class="ion-ios-arrow-forward" aria-hidden="true"></i>'],
		responsive: {
			0: {
				items: 1,
			}
		}
	});

	/*--/ News owl /--*/
	$('#new-carousel').owlCarousel({
		loop: true,
		margin: 30,
		responsive: {
			0: {
				items: 1,
			},
			769: {
				items: 2,
			},
			992: {
				items: 3,
			}
		}
	});

	/*--/ Testimonials owl /--*/
	$('#testimonial-carousel').owlCarousel({
		margin: 0,
		autoplay: true,
		nav: true,
		animateOut: 'fadeOut',
		animateIn: 'fadeInUp',
		navText: ['<i class="ion-ios-arrow-back" aria-hidden="true"></i>', '<i class="ion-ios-arrow-forward" aria-hidden="true"></i>'],
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1,
			}
		}
	});

	//이메일 입력방식 선택 
	$('#selectEmail').change(function () {
		$("#selectEmail option:selected").each(function () {
			if ($(this).val() == '1') {
				//직접입력일 경우 
				$("#str_email").val(''); //값 초기화 
				$("#str_email").attr("disabled", false); //활성화 
			} else { //직접입력이 아닐경우 
				$("#str_email").val($(this).text()); //선택값 입력 
				$("#str_email").attr("disabled", true); //비활성화 
			}
		});
	});

	//계좌 입력방식 선택 
	$('#selectBank').change(function () {
		$("#selectBank option:selected").each(function () {
			if ($(this).val() == '1') {
				//직접입력일 경우 
				$("#str_bank").val(''); //값 초기화 
				$("#str_bank").attr("disabled", false); //활성화 
			} else { //직접입력이 아닐경우 
				$("#str_bank").val($(this).text()); //선택값 입력 
				$("#str_bank").attr("disabled", true); //비활성화 
			}
		});
	});

})(jQuery);

function setThumbnail(event) {
	var reader = new FileReader(); reader.onload = function (event) { var img = document.createElement("img"); img.setAttribute("src", event.target.result); document.querySelector("div#image_f").appendChild(img); };
	reader.readAsDataURL(event.target.files[0]);
}

function goPopup() {
	var pop = window.open("jusoPopup.do.html",
		"pop", "width=570,height=420, scrollbars=yes, resizable=yes");
}
function jusoCallBack(roadFullAddr, roadAddrPart1, addrDetail, roadAddrPart2, engAddr, jibunAddr, zipNo) {
	document.getElementById("zipNo").value = zipNo; document.getElementById("addr").value = roadAddrPart1; if (addrDetail.length > 30) { alert('상세주소가 너무 길어 다시 입력해야 합니다.'); return; } document.getElementById("addrDetail").value = addrDetail;
}

//로그인 아이디, 비밀번호 빈값 체크
function isEmpty() {
	if (!document.login_form.inputId.value) {
		alert('아이디를 입력해주십시오.');
		document.login_form.inputId.focus();
		return;
	} else if (!document.login_form.inputPwd.value) {
		alert('비밀번호를 입력해주십시오.');
		document.login_form.inputPwd.focus();
		return;
	} else {
		document.login_ok.submit();
	}
}

//회원가입 빈값 체크
function isEmpty_signUp() {
	var namecheck = /^[가-힣\s]+$/;
	var numcheck = /[0-9]/;
	var rrcheck = /[0-9]{6}/;
	var rrcheck2 = /[0-9]{7}/;
	var phonecheck = /[0-9]{3}/;
	var phonecheck2 = /[0-9]{4}/;
	var phonecheck3 = /[0-9]{4}/;
	var idcheck = /[a-zA-Z0-9_]{5,20}/;
	var pwdcheck = /[a-zA-Z0-9~!@#$%^&*()_+|<>?:{}]{8,16}/;
	var emailcheck = /[A-Za-z0-9_]+[A-Za-z0-9]/;
	var emailcheck2 = /[a-zA-Z0-9_]*[.]{1}[A-Za-z]{1,3}/;

	if (!document.signUp_form.inputName.value) {
		alert('이름을 입력해주십시오.');
		document.signUp_form.inputName.focus();
		return;
	} else if (!document.signUp_form.inputRR.value) {
		alert('주민등록번호를 입력해주십시오.');
		document.signUp_form.inputRR.focus();
		return;
	} else if (!document.signUp_form.inputRR2.value) {
		alert('주민등록번호를 입력해주십시오.');
		document.signUp_form.inputRR2.focus();
		return;
	} else if (!document.signUp_form.inputPhone.value) {
		alert('핸드폰 번호를 입력해주십시오.');
		document.signUp_form.inputPhone.focus();
		return;
	} else if (!document.signUp_form.inputPhone2.value) {
		alert('핸드폰 번호를 입력해주십시오.');
		document.signUp_form.inputPhone2.focus();
		return;
	} else if (!document.signUp_form.inputPhone3.value) {
		alert('핸드폰 번호를 입력해주십시오.');
		document.signUp_form.inputPhone3.focus();
		return;
	} else if (document.signUp_form.inputGender.value == "X") {
		alert('성별을 선택해주십시오.');
		document.signUp_form.inputGender.focus();
		return;
	} else if (!document.signUp_form.inputId.value) {
		alert('아이디를 입력해주십시오.');
		document.signUp_form.inputId.focus();
		return;
	} else if (!document.signUp_form.inputPwd.value) {
		alert('비밀번호를 입력해주십시오.');
		document.signUp_form.inputPwd.focus();
		return;
	} else if (!document.signUp_form.inputPwd2.value) {
		alert('비밀번호를 한 번 더 입력해주십시오.');
		document.signUp_form.inputPwd2.focus();
		return;
	} else if (!document.signUp_form.str_email2.value) {
		alert('이메일을 입력해주십시오.');
		document.signUp_form.str_email2.focus();
		return;
	} else if (!document.signUp_form.str_email.value) {
		alert('이메일을 입력해주십시오.');
		document.signUp_form.str_email.focus();
		return;
	} else if (!document.signUp_form.str_bank.value) {
		alert('거래은행을 선택 혹은 입력해주십시오.');
		document.signUp_form.str_bank.focus();
		return;
	} else if (!document.signUp_form.inputBank.value) {
		alert('계좌번호를 입력해주십시오.');
		document.signUp_form.inputBank.focus();
		return;
	} else if (!namecheck.test(document.signUp_form.inputName.value)) {
		alert('이름을 다시 확인해주십시오. (이름은 한글만 사용가능. 특수기호, 공백 사용 불가. 최소 2자 이상 입력.)');
		document.signUp_form.inputName.focus();
		return;
	} else if (!rrcheck.test(document.signUp_form.inputRR.value)) {
		alert('주민등록번호를 다시 확인해주십시오.');
		document.signUp_form.inputRR.focus();
		return;
	} else if (!rrcheck2.test(document.signUp_form.inputRR2.value)) {
		alert('주민등록번호를 다시 확인해주십시오.');
		document.signUp_form.inputRR2.focus();
		return;
	} else if (!phonecheck.test(document.signUp_form.inputPhone.value)) {
		alert('휴대폰 번호를 다시 확인해주십시오.');
		document.signUp_form.inputPhone.focus();
		return;
	} else if (!phonecheck2.test(document.signUp_form.inputPhone2.value)) {
		alert('휴대폰 번호를 다시 확인해주십시오.');
		document.signUp_form.inputPhone2.focus();
		return;
	} else if (!phonecheck3.test(document.signUp_form.inputPhone3.value)) {
		alert('휴대폰 번호를 다시 확인해주십시오.');
		document.signUp_form.inputPhone3.focus();
		return;
	} else if (!idcheck.test(document.signUp_form.inputId.value)) {
		alert('아아디는 5~20자의 영문 소문자, 숫자와 특수기호(_)만 사용 가능합니다.');
		document.signUp_form.inputId.focus();
		return;
	} else if (!pwdcheck.test(document.signUp_form.inputPwd.value)) {
		alert('비밀번호는 8~16자 영문 대 소문자, 숫자, 특수문자를 모두 사용해야합니다.');
		document.signUp_form.inputPwd.focus();
		return;
	} else if (document.signUp_form.inputPwd.value != document.signUp_form.inputPwd2.value) {
		alert('비밀번호가 일치하지 않습니다. 다시 확인해주십시오.');
		document.signUp_form.inputPwd.focus();
		return;
	} else if (!emailcheck.test(document.signUp_form.str_email2.value)) {
		alert('이메일을 다시 확인해주십시오.');
		document.signUp_form.str_email2.focus();
		return;
	} else if (!emailcheck2.test(document.signUp_form.str_email.value)) {
		alert('이메일 형식을 다시 확인해주십시오.');
		document.signUp_form.str_email.focus();
		return;
	} else if (!numcheck.test(document.signUp_form.inputBank.value)) {
		alert('계좌번호를 다시 확인해주십시오.');
		document.signUp_form.inputBank.focus();
		return;
	} else {
		document.signUp_ok.submit();
	}
}


function formForSale() {
	var name = document.getElementById("name").value;
	var type = document.getElementById("type").value;
	var zipNo = document.getElementById("zipNo").value;
	var addr = document.getElementById("addr").value;
	var addrDetail = document.getElementById("addrDetail").value;
	var roomSize = document.getElementById("roomSize").value;
	var roomCount = document.getElementById("roomCount").value;
	var bathCount = document.getElementById("bathCount").value;
	var garages = document.getElementById("garages").value;
	var carPlace = document.getElementById("carPlace").value;
	var adminExpense = document.getElementById("adminExpense").value;
	var price = document.getElementById("price").value;
	var priceExpert = document.getElementById("priceExpert").value;
	var image = document.getElementById("image");
console.log(type)
}