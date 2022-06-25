const sbmt_btn = document.getElementById("sbmt_btn");
sbmt_btn.addEventListener("click", submit);
const user_score = document.querySelectorAll(".rating-btn");
let rting;

// Change score button state to active and unset the rest
user_score.forEach((element) => {
  element.addEventListener("click", function rate() {
    for (var i = 0; i < user_score.length; i++) {
      user_score[i].classList.remove("active");
    }
    element.classList.add("active");
    rting = parseInt(element.textContent);
  });
});

// Set screen 2 with score selected
function submit() {
  if (!isNaN(rting)) {
    const st1 = document.getElementById("st1");
    const st2 = document.getElementById("st2");
    document.querySelector(".hide").style.cssText =
      "transform:translate(0, -100%)";
    console.log("Submitted");
    st1.classList.add("hide");
    setTimeout(() => {
      st2.classList.remove("hide");
      console.log("tiempo de espera");
    }, 250);

    document.getElementById("score_value").innerHTML = `  ${rting} `;
  } else {
    window.alert("Selecciona un valor");
  }
}
