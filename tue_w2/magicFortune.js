let btn = document.getElementById("btn")
let msg = document.getElementById("fortune")


let fortunes = [
  "You will have a great day!",
  "A surprise is waiting for you around the corner.",
  "Someone will appreciate your hard work soon.",
  "Good news is on its way!",
  "Take a risk today — it will pay off.",
  "You are stronger than you think.",
  "A new opportunity will open up for you.",
  "Your kindness will be returned in unexpected ways.",
  "Believe in yourself — you have got this.",
  "Something you lost will soon be found.",
  "Move then Improve."
]


function showFortune() {
    let randomIndex = Math.floor(Math.random() * fortunes.length);
    let fortuneText = fortunes[randomIndex];
    msg.textContent = fortuneText;
}


btn.addEventListener('click', showFortune)