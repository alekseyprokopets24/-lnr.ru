$(function () {

	pref = $('.wrap').data('pref');

	$('.lbox').fancybox({
		padding: 0,
		openEffect: 'elastic',
		openSpeed: 150,
		closeEffect: 'elastic',
		closeSpeed: 150,
		closeClick: true,
		helpers: {
			overlay: null
		}
	});

	$('.num_only').on("change keyup input click", function () {
		if (this.value.match(/[^0-9]/g)) {
			this.value = this.value.replace(/[^0-9]/g, '');
		}
	});

	$('.slick').slick({
		centerMode: false,
		slidesToShow: 3,
		arrows: true,
		infinite: true,
		autoplay: false,
		draggable: true,
		prevArrow: $('.slick-prev'),
		nextArrow: $('.slick-next'),
	});

	function rotate(t, n) {
		$('#' + t).animate({ opacity: '0' }, 800);
		$('#' + n).animate({ opacity: '1' }, 800);
		$('.block8_slider__body__el').removeClass('block8_slider__body__el--active');
		$('#' + n).addClass('block8_slider__body__el--active');
		$('#block8_slider__nav li').removeClass('block8_slider__nav--active');
		$('[data-id="' + n + '"]').addClass('block8_slider__nav--active');
	}

	$('#block8_slider__nav li').click(function () {
		if (!$(this).hasClass('block8_slider__nav--active')) {
			t_id = $('.block8_slider__nav--active').data('id');
			n_id = $(this).data('id');
			rotate(t_id, n_id);
		}
	});

	$('.modal_video').click(function (e) {
		e.preventDefault();
		tp = $(this).data('tp');
		if (tp == 'presentation') {
			vid = '<iframe width="560" height="315" src="https://www.youtube.com/embed/YWj4uVUZsiM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
		} else if (tp == 'technology') {
			vid = '<iframe width="560" height="315" src="https://www.youtube.com/embed/KK3fW9Ny6ok" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
		} else if (tp == 'install') {
			vid = '<iframe width="560" height="315" src="https://www.youtube.com/embed/Mgz-sRZqmZA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
		}
		$('#mdl').html('<div id="mdl_video"><div class="thumb-wrap">' + vid + '</div></div>');
		modal_open();
	});

	function modal_close() {
		$.fancybox.close();
	}

	$('.mc').live('click', function () {
		modal_close();
	});

	function modal_open() {
		$.fancybox({
			padding: 0,
			openEffect: 'fade',
			openSpeed: 200,
			closeEffect: 'fade',
			closeSpeed: 200,
			closeClick: false,
			href: '#mdl'
		});
	}

});


const jsRecallBtn = document.querySelector('#js-recall');
const btnRecallSuccsess = document.querySelector('.btn-recall');
const jsRecallFooterBtn = document.querySelector('#js-recall-footer');
const modalWindow = document.querySelector('.modal-window');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('#btn-close-modal');
const inputs = document.querySelectorAll('input');

jsRecallBtn.addEventListener('click', showModal);
btnCloseModal.addEventListener('click', closeModal);
jsRecallFooterBtn.addEventListener('click', showModal);

function showModal() {
	overlay.style.display = 'block';
	modalWindow.style.display = 'flex';



	document.body.style.overflow = 'hidden';
}

function closeModal() {
	overlay.style.display = 'none';
	modalWindow.style.display = 'none';

	document.body.style.overflow = 'visible';
}

function recallSuccsess() {
	document.location.href = "spasibo.html";

}










