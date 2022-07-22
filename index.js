const teamone = document.getElementById("teamone");
const teamtwo = document.getElementById("teamtwo");

const teamOnebtnone = document.querySelector(".team-one-btn-one");
const teamOnebtntwo = document.querySelector(".team-one-btn-two");
const teamOnebtnthree = document.querySelector(".team-one-btn-three");

const teamTwobtnone = document.querySelector(".team-two-btn-one");
const teamTwobtntwo = document.querySelector(".team-two-btn-two");
const teamTwobtnthree = document.querySelector(".team-two-btn-three");

teamOnebtnone.addEventListener("click", () => {
  teamone.textContent++;
});

teamTwobtnone.addEventListener("click", () => {
  teamtwo.textContent++;
});

teamOnebtntwo.addEventListener("click", () => {
  teamone.textContent = Number(teamone.textContent) + 2;
});

teamTwobtntwo.addEventListener("click", () => {
  teamtwo.textContent = Number(teamtwo.textContent) + 2;
});

teamOnebtnthree.addEventListener("click", () => {
  teamone.textContent = Number(teamone.textContent) + 3;
});

teamTwobtnthree.addEventListener("click", () => {
  teamtwo.textContent = Number(teamtwo.textContent) + 3;
});

function resetNum() {
  teamone.textContent = 0;
  teamtwo.textContent = 0;
}
