/*document.addEventListener('DOMContentLoaded', () => {
	const images = document.querySelectorAll('img');
	images.forEach(image => {
		const maxLeft = window.innerWidth * 0.5 / 16;
		const left = -Math.random() * maxLeft + 'rem';
		const maxRight = window.innerWidth * 0.5 / 16;
		const right = -Math.random() * maxRight + 'rem';

		image.style.setProperty('--left', left);
		image.style.setProperty('--right', right);
	});
});*/

document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.galeria3D img');

    images.forEach(image => {
        const maxOffset = window.innerWidth * 0.5 / 16;
        const left = -Math.random() * maxOffset + 'rem';
        const right = -Math.random() * maxOffset + 'rem';

        image.style.setProperty('--left', left);
        image.style.setProperty('--right', right);
    });
});
