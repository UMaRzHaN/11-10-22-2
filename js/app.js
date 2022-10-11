const container = document.querySelector(".container");
const input = document.querySelector("input");
const btn =document.querySelector("button");
let b;
btn.addEventListener("click", () => {
//   if (b === "Enter") {
    const newEl = document.createElement("div");
    newEl.className = "card";
    b = input.value;
    b = b.split(" ");
    newEl.innerText = b[0];
    newEl.style=  `background-image: url(${b[1]});`

    container.append(newEl);
    console.log(typeof newEl);
  
});
