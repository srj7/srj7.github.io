const typedSpan = document.getElementById("typed")
const totype = ["DevOps Engineer", "AWS/GCP Developer", "OpenSource Contributer", "Linux Lover", "Freelancer","Technology Enthusiasist"]

const delayTyping_char = 100;
const delayErasing_text = 150;
const delayTyping_text = 1000;

let totypeIndex = 0;
let charIndex = 0;

function typeText() {
	if (charIndex < totype[totypeIndex].length) {
		typedSpan.textContent += totype[totypeIndex].charAt(charIndex);
		charIndex++;
		setTimeout(typeText, delayTyping_char);
	}
	else {
		setTimeout(eraseText, delayTyping_text);
	}
}

function eraseText() {
	if (charIndex > 0) {
		typedSpan.textContent = totype[totypeIndex].substring(0, charIndex-1);
		charIndex = charIndex-1;
		setTimeout(eraseText, delayErasing_text);
	}
	else {
		totypeIndex++;

		if (totypeIndex >= totype.length)
			totypeIndex = 0;
			setTimeout(typeText, delayTyping_text);
	}
}

window.onload = function() {
	if (totype[totypeIndex].length) setTimeout(typeText, delayTyping_text);
}
