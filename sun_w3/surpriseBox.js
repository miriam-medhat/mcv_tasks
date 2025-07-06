let btn = document.getElementById("btn")
let msg = document.getElementById("surprise")


let surprises = [
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

async function showSurprise() {


  msg.textContent = "Getting your surprise..."

  await new Promise(resolve => setTimeout(resolve, 1500)); 

  let randomIndex = Math.floor(Math.random() * surprises.length);
  let surprisetext = surprises[randomIndex];
  msg.textContent = surprisetext;
}


btn.addEventListener('click', showSurprise)