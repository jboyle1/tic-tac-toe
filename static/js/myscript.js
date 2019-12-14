// Restart game button
var restart = document.querySelector('#b');
// Grabs all the squares
var squares = document.querySelectorAll('td')
// Clear all the squares
function clearboard() {
    for (var i = 0; i < squares.length; i++ ) {
        squares[i].textContent = '';
    }
}


restart.addEventListener('click',clearboard);
// Check the square marker

// For loop to add event listeners to all the squares