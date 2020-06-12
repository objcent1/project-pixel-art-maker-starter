// Select color input
// Select size input

//Declaration of elements from indexHtml
const gridBody = document.createElement('tbody');
const gridData = document.getElementsByTagName('td');
const pixel = document.getElementById('pixelCanvas');
const size = document.getElementById('sizePicker');

// val parameter call the specific cell to be coloured
//func colorOnClick enable selected cell to be filled colorPicker choice
function colorOnClick(val) {
  const color = document.getElementById('colorPicker').value;
  val.target.bgColor = color;
}

//func makeGrid creates square/s on submit click
//height and weight parameters allows user to input number of squares
function makeGrid(height, width) {
  gridBody.innerHTML = '';
  for (let s = 0; s < height; s++) {
    var nRow = document.createElement('tr');
    for (let t = 0; t < width; t++) {
      let nCell = document.createElement('td');
      nRow.appendChild(nCell);
    }
    gridBody.appendChild(nRow);
  }
  pixel.appendChild(gridBody);
  event.preventDefault();
  gridBody.addEventListener('click', colorOnClick);
}

//Creates a grid when the makeGrid funct is call
size.addEventListener('submit', function (event) {
  let height = document.getElementById('inputHeight').value;
  let width = document.getElementById('inputWidth').value;
  makeGrid(height, width);
});

