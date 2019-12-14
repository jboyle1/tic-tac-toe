// Restart game button
var restart = document.querySelector('#b');
// Grabs all the squares
var squares = document.querySelectorAll('td')
// Clear all the squares
function clearboard() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].textContent = '';
    }
}
restart.addEventListener('click', clearboard);
// Check the square marker using non efficient code
/*var cellOne = document.querySelector('#one')

cellOne.addEventListener('click', function () {
    if (cellOne.textContent === '') {
        cellOne.textContent = 'X'
    } else if (cellOne.textContent === 'X') {
        cellOne.textContent = 'O'
    } else {
        cellOne.textContent = '';
    }
})*/
//Check the square marker
function changeMarker() {
    if (this.textContent === '') {
        this.textContent = 'X'
    } else if (this.textContent === 'X') {
        this.textContent = 'O';
    } else {
        this.textContent = '';
    }
}
// For loop to add event listeners to all the squares
