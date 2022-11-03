let url =
  "https://script.google.com/macros/s/AKfycbwo7CCDeaq3ifn843CqZ-Nr893po-zBc4lKkjMd9kFofk8miXt1VtK3bu2W8x7iV4wPPA/exec";
let myForm = document.getElementById("myForm");
let yourName = document.getElementById("name");
let yourEmail = document.getElementById("inputEmail");
let yourMessage = document.getElementById("message");

myForm.addEventListener("submit", submitter);

function submitter(event) {
  event.preventDefault();
  let myObj = {
    name: yourName.value,
    email: yourEmail.value,
    message: yourMessage.value,
  };
  showUserInfo(myObj);
  yourName.value = "";
  yourEmail.value = "";
  yourMessage.value = "";
}

function showUserInfo(data) {
  fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
    });
}

var nav = document.querySelector("nav");

window.addEventListener("scroll", changeNavBg);

function changeNavBg() {
  if (window.pageYOffset > 340) {
    nav.classList.add("forNav");
  } else {
    nav.classList.remove("forNav");
  }
}
