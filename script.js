let promtForKeys = 0;
document.querySelector(".click-me").addEventListener("click", () => {
  if (document.querySelector("input").value) {
    promtForKeys = document.querySelector("input").value.trim();
    document.querySelectorAll("div").forEach((div) => {
      div.style.display = "flex";
      document.querySelector("h1").style.display = "none";
      document.querySelector("input").style.display = "none";
      document.querySelector(".click-me").style.display = "none";
    });
  } else {
    document.body.innerHTML =
      '<h1 style="margin: auto;">You fool, if you cancel it, then how will you play the game!!! <br />  Restarting in five seconds</h1><script src="script.js"></script> ';
    setTimeout(() => {
      location.reload();
    }, 5000);
  }
});

document.querySelector("input").addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    document.querySelector(".click-me").click();
  }
});

const buttons = document.querySelectorAll("button");
const upArrow = document.querySelector(".up");
const downArrow = document.querySelector(".down");
const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    button.style.backgroundColor = "red";

    setTimeout(() => {
      button.style.backgroundColor = " #007bff";
    }, 200);
  });
});

document.body.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    upArrow.click();
  } else if (event.key === "ArrowDown") {
    downArrow.click();
  } else if (event.key === "ArrowLeft") {
    leftArrow.click();
  } else if (event.key === "ArrowRight") {
    rightArrow.click();
  }
});

let pattern = [];
let appendKey = "";

let userMove = [];
let currentPattern = [];
let movesToPlay;
let i = 1;
document.querySelector(".start").addEventListener("click", function () {
  for (let i = 0; i < Number(promtForKeys); i++) {
    const random = Math.ceil(Math.random() * 4);
    appendKey =
      random == 1
        ? "up"
        : random == 2
        ? "right"
        : random == 3
        ? "left"
        : "down";
    pattern.push(appendKey);
  }
  //i = 1;
  currentPattern = pattern.slice(0, i);
  movesToPlay = currentPattern.length + 1;
  console.log(currentPattern, pattern);
  let timeout = 1000;
  currentPattern.forEach((patternKey) => {
    setTimeout(() => {
      document.querySelector(`.${patternKey}`).style.backgroundColor = "red";
    }, timeout);

    setTimeout(() => {
      document.querySelector(`.${patternKey}`).style.backgroundColor =
        "#007bff";
    }, timeout + 200);
    timeout += 1000;
  });
  const bodyClickFunction = (event) => {
    movesToPlay--;
    document.querySelector("span").innerHTML = movesToPlay;
    if (document.querySelector("span").innerHTML == "0") {
      setTimeout(() => {
        movesToPlay = currentPattern.length;
        document.querySelector("span").innerHTML = movesToPlay;
      }, 1100);
    }
    if (event.target.className !== "start") {
      userMove.push(event.target.className);
      console.log(userMove);
      if (userMove.length == currentPattern.length) {
        if (userMove.join("") == currentPattern.join("")) {
          i++;
          if (i <= promtForKeys) {
            currentPattern = pattern.slice(0, i);
            movesToPlay = currentPattern.length;
            userMove = [];
            console.log(currentPattern);
            timeout = 1000;
            currentPattern.forEach((patternKey) => {
              setTimeout(() => {
                document.querySelector(`.${patternKey}`).style.backgroundColor =
                  "red";
              }, timeout);

              setTimeout(() => {
                document.querySelector(`.${patternKey}`).style.backgroundColor =
                  "#007bff";
              }, timeout + 200);
              timeout += 500;
            });
          } else {
            setTimeout(() => {
              document.querySelector("h1").innerHTML =
                "You successfully won the game!";
              document.body.removeEventListener("click", bodyClickFunction);
            }, 200);
          }
        } /*if (userMove.join("") != currentPattern.join(""))*/ else {
          document.querySelector("h1").innerHTML =
            "Sorry, You just lost the easiest game in the world";
        }
      }
    }

    console.log("Hello");
    this.disabled = true;
  };
  document.body.addEventListener("click", bodyClickFunction);
});

document.querySelector(".start").addEventListener("click", () => {});
