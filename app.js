const steps = document.querySelector(".steps");
const children = steps.children;

const sections = document.querySelectorAll("section");

const btnNext = document.getElementsByClassName("btn-next");
const btnBack = document.getElementsByClassName("btn-back");

let activeStep = 0;

for(let i = 0; i < btnNext.length; i++) {
  btnNext[i].addEventListener("click", function() {
    let s = i + 1;
    console.log(s);
    changeStep(s);
  })
} 

for(let i = 0; i < btnBack.length; i++) {
  btnBack[i].addEventListener("click", function() {
    let s = i - 1;
    changeStep(s);
  })
} 

function changeStep(s) {
  console.log(children[s]);
  if (s < 4) { 
    children[s].classList.add("active");
    children[activeStep].classList.remove("active");
  }
  sections[s].classList.add("active");
  sections[activeStep].classList.remove("active");
  activeStep = s;
}

/*
console.log(activeStep);
document.querySelector('input[name="genderS"]:checked').value;
*/