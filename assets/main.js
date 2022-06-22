
let btn = document.getElementById("btn").addEventListener("click", (event) => {
	
	const value = document.getElementById("text").value;
	if (!value) {
		return
	}
	event.preventDefault();
	let para = document.getElementById("demo");
	para.textContent = `Hello ${value}, welcome to the bootcamp`;

	document.getElementById("text").value = "";
	
	
});