const fill = document.querySelector(".fill");
const blocks = document.querySelectorAll(".block");

fill.addEventListener("dragstart", startDrag);
fill.addEventListener("dragend", endDrag);

blocks.forEach((block) => {
  block.addEventListener("dragover", dragOver);
  block.addEventListener("dragenter", dragEnter);
  block.addEventListener("dragleave", dragLeave);
  block.addEventListener("drop", dragDrop);
});

function startDrag() {
  this.className += " drag";
  setTimeout(() => (this.className = "invisible"), 0);
}

function endDrag() {
  this.className = "fill";
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.className += " hovered";
}

function dragLeave() {
  this.className = "block";
}

function dragDrop() {
  this.className = "block";
  this.append(fill);
}
