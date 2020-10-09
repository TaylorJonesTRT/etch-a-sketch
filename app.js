const container = document.getElementById('sketch-pad');
const gridItems = document.querySelectorAll('.grid-item');
const resetButton = document.getElementById('reset-btn');

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div");
      container.appendChild(cell).className = "grid-item";
      cell.addEventListener('mouseover', () => {
        cell.classList.add('hover');
      })
    };
  };

// The initial sketchpad on page load
makeRows(5, 5);

// Reseting and defining the new sketchpad and it's size
resetButton.onclick = function () {
  container.innerHTML = "";
  let resetAmount = prompt("How many squares would you like on each side?");
  if (resetAmount <= 100) {
    makeRows(resetAmount, resetAmount);
  } else {
    alert('I am sorry but you cannot go over 100');
  }
};
