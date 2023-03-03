const activeStep = document.querySelectorAll(".btn-next");

for(let i = 0; i < activeStep.length; i++) {
  activeStep[i].addEventListener("click", function() {
    console.log(activeStep[i].data-step);
  })
}