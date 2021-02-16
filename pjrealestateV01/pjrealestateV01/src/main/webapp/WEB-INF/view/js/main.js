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

	var namecheck = /^[가-힣\s]+$/;
	var addrDetailcheck = /^[가-힣\s]+$/ + /[0-9]/;
	var roomSizecheck = /[0-9]{3}/;
	var roomCountcheck = /[0-9]{3}/;
	var adminExpensecheck = /^[가-힣\s]+$/ + /[0-9]/;
	var pricecheck = /^[가-힣\s]+$/ + /[0-9]/;

	if (!document.formForName.inputName.value) {
		alert('이름을 입력해주십시오.');
		document.formForName.inputName.focus();
		return;
	} else if (!namecheck.test(document.formForName.inputName.value)) {
		alert('이름을 다시 확인해주십시오. (이름은 한글만 사용가능. 특수기호, 공백 사용 불가. 최소 2자 이상 입력.)');
		document.formForName.inputName.focus();
		return;
	}
	else if (!document.formForName.type.value == "X") {
		alert('거래방식을 선택해주세요.');
		document.formForName.type.focus();
		return;
	} else if (!document.formForName.zipNo.value) {
		alert('우편 번호를 입력해주십시오.');
		document.formForName.zipNo.focus();
		return;
	} else if (!document.formForName.addr.value) {
		alert('기본 주소를 입력해주십시오.');
		document.formForName.addr.focus();
		return;
	} else if (!document.formForName.addrDetail.value) {
		alert('나머지 주소를 입력해주십시오.');
		document.formForName.addr.focus();
		return;
	} else if (!addrDetailcheck.test(document.formForName.addrDetail.value)) {
		alert('나머지 주소를 다시 확인해주십시오. (나머지 주소는 한글만 사용가능. 특수기호, 공백 사용 불가. 최소 2자 이상 입력.)');
		document.formForName.addrDetail.focus();
		return;
	} else if (!document.formForName.roomSize.value) {
		alert('평수를 입력해주십시오.');
		document.formForName.roomSize.focus();
		return;
	} else if (!roomSizecheck.test(document.formForName.roomsize.value)) {
		alert('평수를 다시 확인해 주십시오.(평수는 숫자와 한글만 사용가능. 특수기호, 공백 사용 불가. 최소 2자 이상 입력.)')
		document.formForName.roomsize.focus();
		return;
	} else if (!document.formForName.roomSize.value) {
		alert('방의 개수를 입력해주십시오.');
		document.formForName.roomCount.focus();
		return;
	} else if (!roomCountcheck.test(document.formForName.roomCount.value)) {
		alert('방의 개수를 다시 확인해 주십시오.(방의 개수는 숫자와 한글만 사용가능. 특수기호, 공백 사용 불가. 최소 2자 이상 입력.)')
		document.formForName.roomCount.focus;
		return;
	} else if (!document.formForName.garages.value) {
		alert('창고 여부를 선택해주십시오.');
		document.formForName.garages.focus();
		return;
	} else if (!document.formForName.carPlace.value) {
		alert('주차장 여부를 선택해주십시오.');
		document.formForName.carPlace.focus();
		return;
	} else if (!document.formForName.content.value) {
		alert('기본옵션을 입력해주십시오.');
		document.formForName.content.focus();
		return;
	} else if (!document.formForName.adminExpense.value) {
		alert('관리비를 입력해주십시오.');
		document.formForName.adminExpense.focus();
		return;
	} else if (!adminExpensecheck.test(document.formForName.adminExpense.value)) {
		alert('관리비를 다시 확인해 주십시오.(관리비는 숫자와 한글만 사용가능. 특수기호, 공백 사용 불가. 최소 2자 이상 입력.)')
		document.formForName.adminExpense.focus;
		return;
	} else if (!document.formForName.price.value) {
		alert('가격을 입력해주십시오.');
		document.formForName.price.focus();
		return;
	} else if (!pricecheck.test(document.formForName.price.value)) {
		alert('가격을 다시 확인해 주십시오.(가격은 숫자와 한글만 사용가능. 특수기호, 공백 사용 불가. 최소 2자 이상 입력.)')
		document.formForName.price.focus;
		return;

	} else if (!document.formForName.priceExpert.value) {
		alert('전문가 가격을 조회해주십시오.');
		document.formForName.priceExpert.focus();
		return;
	}
	else {
		document.formForName.submit();
		return true;
	}
}

var element_wrap = document.getElementById('wrap');

function foldDaumPostcode() {

	// iframe을 넣은 element를 안보이게 한다.
	element_wrap.style.display = 'none';
}

function formForAddress() {
	//jusopop.html ->tread_sell.html
	var postcode = document.getElementById('sample3_postcode').value;
	var address = document.getElementById('sample3_address').value;
	var detailAddress = document.getElementById('sample3_detailAddress').value;
	var extraAddress = document.getElementById('sample3_extraAddress').value;

	document.formForJuso.action="index.html";
	document.formForJuso.submit();
	window.open("about:blank","_self").close();

}

function sample3_execDaumPostcode() {
	// 현재 scroll 위치를 저장해놓는다.
	var currentScroll = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
	new daum.Postcode({
		oncomplete: function (data) {
			// 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

			// 각 주소의 노출 규칙에 따라 주소를 조합한다.
			// 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
			var addr = ''; // 주소 변수
			var extraAddr = ''; // 참고항목 변수

			//사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
			if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
				addr = data.roadAddress;
			} else { // 사용자가 지번 주소를 선택했을 경우(J)
				addr = data.jibunAddress;
			}

			// 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
			if (data.userSelectedType === 'R') {
				// 법정동명이 있을 경우 추가한다. (법정리는 제외)
				// 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
				if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
					extraAddr += data.bname;
				}
				// 건물명이 있고, 공동주택일 경우 추가한다.
				if (data.buildingName !== '' && data.apartment === 'Y') {
					extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
				}
				// 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
				if (extraAddr !== '') {
					extraAddr = ' (' + extraAddr + ')';
				}
				// 조합된 참고항목을 해당 필드에 넣는다.
				document.getElementById("sample3_extraAddress").value = extraAddr;

			} else {
				document.getElementById("sample3_extraAddress").value = '';
			}

			// 우편번호와 주소 정보를 해당 필드에 넣는다.
			document.getElementById('sample3_postcode').value = data.zonecode;
			document.getElementById("sample3_address").value = addr;
			// 커서를 상세주소 필드로 이동한다.
			document.getElementById("sample3_detailAddress").focus();

			// iframe을 넣은 element를 안보이게 한다.
			// (autoClose:false 기능을 이용한다면, 아래 코드를 제거해야 화면에서 사라지지 않는다.)
			element_wrap.style.display = 'none';

			// 우편번호 찾기 화면이 보이기 이전으로 scroll 위치를 되돌린다.
			document.body.scrollTop = currentScroll;
		},
		// 우편번호 찾기 화면 크기가 조정되었을때 실행할 코드를 작성하는 부분. iframe을 넣은 element의 높이값을 조정한다.
		onresize: function (size) {
			element_wrap.style.height = size.height + 'px';
		},
		width: '100%',
		height: '100%'
	}).embed(element_wrap);

	// iframe을 넣은 element를 보이게 한다.
	element_wrap.style.display = 'block';
}