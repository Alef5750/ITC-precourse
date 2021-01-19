const GITHUB_URL = "https://github.com/Alef5750";

fetch(GITHUB_URL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const profileImage = document.getElementById("profile-image");
    profileImage.src = data.avatar_url;
    console.log(data);
  });

// card fading animation upon clicking it
const card = document.querySelector(".card");
const itcText = document.querySelector("h2");
const myName = document.getElementById("my-name");
const backdrop = document.getElementById("backdrop");
const linkedin = document.getElementById("linkedin");
const github = document.getElementById("github");
const stack = document.getElementById("stack");

function expand() {
  card.style.padding = "50px 400px";
  card.style.backgroundImage = "url(sunrise.jpeg)";
  itcText.style.color = "#DD9319";
  myName.style.color = "#0272BD";
  backdrop.style.backgroundColor = "#DD9319";
  linkedin.style.color = "white";
  github.style.color = "white";
  stack.style.color = "white";
}

// "This page was built with HTML, CSS, and JAVASCRIPT"
let languages = ["HTML", "CSS", "JavaScript"];
document.write(
  `This page was built using
    ${languages[0]}
    ${languages[1]} 
    and
    ${languages[2]}`
);
