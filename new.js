/*let age = document.getElementById('age');
 
function showUser(surname, name) {
         alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}
 
showUser.call(age);*/

class options {

	constructor(height = "300px", width = "600px", bg = "gray", fontSize = "40px", textAlign = "center", color = "white") {
		
		this.height = height;
		this.width = width;
		this.bgColor = bg;
		this.fontSize = fontSize;
		this.tAlign = textAlign;
		this.color = color;
	}

	createDiv(text = "Привет JS разработчикам !!!") {
		let newDiv = document.createElement("div");
		newDiv.textContent = text;
		newDiv.style.backgroundColor = this.bgColor;
		newDiv.style.padding = "200px 100px 0";
		newDiv.style.margin = "50px 400px";
		newDiv.style.opacity = '0.5';
		newDiv.style.textAlign = this.tAlign;
		newDiv.style.width = this.width;
		newDiv.style.height = this.height;
		newDiv.style.fontSize = this.fontSize;
		newDiv.style.color = this.color;

		return newDiv;
	}
}

let check = new options();
let myDiv = check.createDiv();
document.body.appendChild(myDiv);