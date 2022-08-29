let btn = document.getElementById("text");
	btn.addEventListener('keyup', (e) => {
	document.querySelector(".area").value = e.target.value;
	if (e.code == "Enter") {
		checker();
	}
	if(e.code == "Backspace") {
		document.querySelector(".area").value = e.target.value;
	}
	let x = document.querySelector(".x");
	let words = document.getElementById("text").value;
	let wordsLength = words.length ;

		if (wordsLength > 0) {
		x.style.display = "block";
	} else  {
		x.style.display = "none";
	}
});


function checker() {
	var palindrome = document.getElementById("text").value;
	var array = palindrome.split('');
	var arrayrev = array.reverse();
	var revpalindrome = arrayrev.join('');

	if (palindrome === revpalindrome) {
	document.querySelector(".area").value = `${palindrome}: Is a Palindrome`;
	} else {
	document.querySelector(".area").value = `${palindrome}: Is not a Palindrome`;
	}
	if (palindrome == '') {
		document.querySelector(".area").value = "Input a value";
	}
}

function remove() {
	let text = document.querySelector("#text");
	text.value = "";
	document.querySelector(".area").value = '';
}

function textChange() {
	let text = document.querySelector(".area").value
	console.log(text);
	let speech = new SpeechSynthesisUtterance();
	speech.text = text;
	speech.speed = 1;
	speechSynthesis.speak(speech);
}
