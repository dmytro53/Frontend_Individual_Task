function generateAnswer() {
    let answer = ["Yes", "No"];
    let randomAnswer = Math.floor(Math.random() * answer.length);
    return answer[randomAnswer];
}
let inputText = document.createElement("input");
inputText.classList.add("input");
document.body.append(inputText);
let round = document.createElement("div");
round.classList.add("roundDiv");
document.body.append(round);
let button = document.createElement("button");
button.classList.add("button");
button.innerHTML = "Return";
button.addEventListener("click", function() {
    window.location.href = "index.html";
});
document.body.append(button);
round.addEventListener("click", function(){
    let someText = inputText.value.trim();
    if (someText === "") {
        alert("Будь ласка, введіть ваше запитання.");
    } else {
        let text = generateAnswer();
        round.innerHTML = text;
    }
});