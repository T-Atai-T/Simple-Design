function navToggle() {
	let navBtn = document.getElementById('navBtn');
	let mainNav = document.getElementById('mainNav');

	navBtn.onclick = function () {
		if (mainNav.style.display === 'block' || mainNav.style.display === '') {
			mainNav.style.display = 'none';
		} else {
			mainNav.style.display = 'block';
		}
	}

	window.addEventListener("resize", resizeHandler, false);

	function resizeHandler() {
		if (document.documentElement.clientWidth >= 680) {
			mainNav.style.display = 'block';
		} else {
			if (!mainNav.style.display || mainNav.style.display === 'block') {
				mainNav.style.display = 'none';
			}
		}
	}
}

navToggle();
