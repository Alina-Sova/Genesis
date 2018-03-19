"use strict"

ready(() => {
	const originalSelect = document.getElementById('gender');
	const select = document.getElementById('select-display');
	const dropdown = document.getElementsByClassName('dropdown-select')[0];
	select.onclick = () => {
		dropdown.classList.toggle('collapsed');
	}

	const fem = document.getElementById('female');
	const male = document.getElementById('male');

	dropdown.onclick = (e) => {
		let genNeed; //будущий value
		select.innerHTML = e.target.innerHTML;
		if (e.target.innerHTML === "Девушку") {
			genNeed = "Девушка";
		} else {
			genNeed = "Парень";
		}
		originalSelect.setAttribute('value', genNeed);
		dropdown.classList.toggle('collapsed');
	}
})

