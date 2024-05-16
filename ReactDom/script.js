// DOM

// Document - Html Document

// Object -  Element like h1, head, body

// Modal - Complete Document


//Virtual dom original dom ki ek copy hai

//Vitual dom means agar koi change kar rahe hai to pura dom change nahi hoga jis component me change kar rahe hai usi me hoga

var neElement = document.createElement("h2");
neElement.textContent = "Hello, I am H2 Tag";
document.querySelector("body").appendChild(neElement);