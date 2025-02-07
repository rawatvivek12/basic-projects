let boxes = document.querySelectorAll(".box");
let patterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [3, 4, 5],
  [6, 7, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
];
let msg = document.querySelector(".msg");
const message = (argg) => {
  msg.classList.remove("hide");
  msg.innerText = `and the winner is ${argg}`;
};
let reset = document.querySelector(".reset");

reset.addEventListener("click", () => {
  for (box of boxes) {
    box.innerText = "";
    box.disabled = false;
    count = 0;
  }
  msg.classList.add("hide");
});
let newGame = document.querySelector(".new-game");
newGame.addEventListener("click", () => {
  for (box of boxes) {
    box.innerText = "";
    box.disabled = false;
  }
  msg.classList.add("hide");
  count = 0;
});
const stopp = () => {
  for (box of boxes) {
    box.disabled = true;
  }
};
let turnx = true;
let count = 0;
boxes.forEach((box) =>
  box.addEventListener("click", () => {
    if (turnx) {
      box.innerText = "x";
      box.style.color = "yellow";
      turnx = false;
    } else {
      box.innerText = "0";
      turnx = true;
    }
    box.disabled = true;
    winner();
    count++;
    if (count === 9 && winner === "") {
      msg.classList.remove("hide");
      msg.innerText = "The game is a Draw";
    }
  })
);

const winner = () => {
  for (let win of patterns) {
    let val1 = boxes[win[0]].innerText;
    let val2 = boxes[win[1]].innerText;
    let val3 = boxes[win[2]].innerText;
    if (val1 != "" && val2 != "" && val3 != "") {
      if (val1 === val2 && val2 === val3) {
        console.log("winner", val1);
        stopp();
        message(val1);
      }
    }
  }
};
