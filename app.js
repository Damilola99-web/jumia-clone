const date = new Date(2022, 03, 08, 22, 59, 59);
setInterval(() => {
	const d = new Date();
	let newdate = '';
	newdate = `Time left: ${date.getHours() - d.getHours()}h :${date.getMinutes() -
		d.getMinutes()}m: ${date.getSeconds() - d.getSeconds()}s`;
	document.querySelector('.topnav h3').textContent = newdate;
}, 1000);
document.querySelector('#cart').textContent = 0;
let d = document.querySelector('#cart').textContent;
const cart = () => {
	d++;
	document.querySelector('#cart').textContent = d;
	document.querySelector('.cartalert').style.display = 'flex';
	setTimeout(() => {
		document.querySelector('.cartalert').style.display = 'none';
	}, 3000);
};
const allObject = document.querySelectorAll('.object');
for (const objects of allObject) {
	objects.addEventListener('click', cart);
}
const imageslider = () => {
	setTimeout(() => {
		document.querySelector('.centerAd img').src = 'images/AdidasRamadanSlider.gif';
	}, 3000);
	setTimeout(() => {
		document.querySelector('.centerAd img').src = 'images/ramadan-entertainment_712x384.jpg';
	}, 6000);
	setTimeout(() => {
		document.querySelector('.centerAd img').src = 'images/Nestle_SBD_Slider.png';
	}, 9000);
	setTimeout(() => {
		document.querySelector('.centerAd img').src = 'images/ramadan-closet_712x384.jpg';
	}, 12000);
	setTimeout(() => {
		document.querySelector('.centerAd img').src = 'images/ramadan_712x384.jpg';
	}, 15000);
};
const interval = () => {
	setInterval(imageslider(), 16000);
};
interval();

const validate = (e) => {
	console.log(e.target.value);
	const email = e.target.value;
	if (email.includes('@') && email.includes('.')) {
		document.getElementById('input').value = ' ';
		document.getElementById('input').style.border = 'solid 2px green';
		document.querySelector('.cartalerta').style.display = 'flex';
		document.querySelector('.invalid').style.display = 'none';
		setTimeout(() => {
			document.querySelector('.cartalerta').style.display = 'none';
		}, 3000);
	}
	else {
		document.getElementById('input').style.border = 'solid 2px red';
		document.querySelector('.invalid').style.display = 'block';
	}
};
// document.querySelector('.submitt').addEventListener('click', validate)
// document.querySelector('.submit').addEventListener('click', validate)
document.getElementById('input').addEventListener('input', validate);

document.querySelector('#nav').addEventListener('click', () => {
	document.querySelector('.submarket').style.display = 'flex';
});
document.querySelector('#navClose').addEventListener('click', () => {
	document.querySelector('.submarket').style.display = 'none';
});
