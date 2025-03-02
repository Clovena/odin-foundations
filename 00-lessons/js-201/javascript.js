const btn = document.querySelector("#btn");
btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});

const bestBtn = document.querySelector("#bestBtn");
bestBtn.addEventListener("click", () => {
  alert("Hello World");
});

const container = document.querySelector("#container");

// Main subtitle
const subtitle = document.createElement("div");
subtitle.classList.add("subtitle");
subtitle.textContent = "This is my text content!";

// Red text
const redParagraph = document.createElement("p");
redParagraph.style.color = "red";
redParagraph.textContent = "Hey, I'm red!";

// Blue h3
const blueTre = document.createElement("h3");
blueTre.style.color = "blue";
blueTre.textContent = "I'm a blue h3!";

container.appendChild(subtitle);
container.appendChild(redParagraph);
container.appendChild(blueTre);

// Black and pink div
const pinkDiv = document.createElement("div");
pinkDiv.style.cssText =
  "border: 2px solid black; background-color: pink; margin: 12px 0;";

// Regular h1
const pinkHeader = document.createElement("h1");
pinkHeader.textContent = "I'm in a pink div.";

// Regular paragraph
const pinkParagraph = document.createElement("p");
pinkParagraph.textContent = "Me too!";

pinkDiv.appendChild(pinkHeader);
pinkDiv.appendChild(pinkParagraph);
container.appendChild(pinkDiv);

const buttonsGroup = document.querySelectorAll("button");
console.log(buttonsGroup);
buttonsGroup.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert(button.id);
  });
});
