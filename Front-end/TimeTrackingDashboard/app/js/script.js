const work_pr = document.getElementById("workPresent");
const work_ls = document.getElementById("workLast");
const play_pr = document.getElementById("playPresent");
const play_ls = document.getElementById("playLast");
const study_pr = document.getElementById("studyPresent");
const study_ls = document.getElementById("studyLast");
const exercise_pr = document.getElementById("exercisePresent");
const exercise_ls = document.getElementById("exerciseLast");
const social_pr = document.getElementById("socialPresent");
const social_ls = document.getElementById("socialLast");
const selfc_pr = document.getElementById("selfcPresent");
const selfc_ls = document.getElementById("selfcLast");
var mode = "weekly";
const viewMode = document.querySelectorAll(".view-mode");

update(mode);

viewMode.forEach((element) => {
  element.addEventListener("click", function x() {
    for (let i = 0; i < viewMode.length; i++) {
      viewMode[i].classList.remove("active");
    }
    element.classList.add("active");
    mode = element.textContent.toLowerCase();
    update(mode);
  });
});

function update(mode) {
  console.log("updated");
  let hours = [];
  switch (mode) {
    case "monthly":
      for (let i = 0; i < 6; i++) {
        hours.push(data[i].timeframes.monthly);
      }
      hours.push("month -");
      break;
    case "weekly":
      for (let i = 0; i < 6; i++) {
        hours.push(data[i].timeframes.weekly);
      }
      hours.push("week -");

      break;
    case "daily":
      for (let i = 0; i < 6; i++) {
        hours.push(data[i].timeframes.daily);
      }
      hours.push("day -");
      break;
    default:
      hours = hours;
      break;
  }

  work_pr.innerHTML = hours[0].current + "hrs";
  work_ls.innerHTML = ` ${hours[6]} ${hours[0].previous}hrs`;
  play_pr.innerHTML = hours[1].current + "hrs";
  play_ls.innerHTML = ` ${hours[6]} ${hours[1].previous}hrs`;
  study_pr.innerHTML = hours[2].current + "hrs";
  study_ls.innerHTML = ` ${hours[6]} ${hours[2].previous}hrs`;
  exercise_pr.innerHTML = hours[3].current + "hrs";
  exercise_ls.innerHTML = ` ${hours[6]} ${hours[3].previous}hrs`;
  social_pr.innerHTML = hours[4].current + "hrs";
  social_ls.innerHTML = ` ${hours[6]} ${hours[4].previous}hrs`;
  selfc_pr.innerHTML = hours[5].current + "hrs";
  selfc_ls.innerHTML = ` ${hours[6]} ${hours[5].previous}hrs`;
}
