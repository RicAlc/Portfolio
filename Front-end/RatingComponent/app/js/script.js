const sbmt_btn = document.getElementById("sbmt_btn");
sbmt_btn.addEventListener("click", submit);
var rting = 0;
const user_score = document.querySelectorAll(".rating-btn");

user_score.forEach((element) => {
  element.addEventListener("click", function rate() {
    for (var i = 0; i < user_score.length; i++) {
      user_score[i].classList.remove("active");
    }
    element.classList.add("active");
    rting = parseInt(element.textContent);
  });
});

function submit() {
  if (rting > 0) {
    const st1 = document.getElementById("st1");
    const st2 = document.getElementById("st2");
    console.log("Submitted");
    st1.classList.add("hide");
    st2.classList.remove("hide");
    document.getElementById("score_value").innerHTML = `  ${rting} `;
  } else {
    window.alert("Selecciona un valor");
  }
}
