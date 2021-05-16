const h2 = document.querySelector('h2');
const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');
const reset = document.querySelector('#reset');
const firstTo = document.getElementById("firstTo");
const player1Score = document.querySelector('#player1Score');
const player2Score = document.querySelector('#player2Score');

player1.addEventListener('click', function (e) {
    let score = parseInt(player1Score.innerText);
    score++;
    player1Score.innerText = `${score}`;
    if (score >= firstTo.value) {
        player1Score.style.color = 'green';
        player2Score.style.color = 'red';
        disableButtons();

    }
});
player2.addEventListener('click', function (e) {
    let score = parseInt(player2Score.innerText);
    score++;
    player2Score.innerText = `${score}`;
    if (score >= firstTo.value) {
        player2Score.style.color = 'green';
        player1Score.style.color = 'red';
        disableButtons();
    }
});

reset.addEventListener('click', () => {
    player1Score.innerText = "0";
    player2Score.innerText = "0";
    enableButtons();
    player1Score.style.color = 'black';
    player2Score.style.color = 'black';
});


const disableButtons = () => {
    player1.disabled = true;
    player2.disabled = true;
}
const enableButtons = () => {
    player1.disabled = false;
    player2.disabled = false;
}