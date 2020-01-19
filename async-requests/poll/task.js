let pollTitle = document.getElementById('poll__title');
let pollAnswers = document.getElementById('poll__answers');
let id, title, answers;
let xhr = new XMLHttpRequest();

let request = new XMLHttpRequest();
let url = 'https://netology-slow-rest.herokuapp.com/poll.php';
request.open('GET', url);
request.setRequestHeader('Content-Type', 'application/json');
request.addEventListener('readystatechange', showButtons);
request.send();

function showButtons() {
    if (request.readyState === 4 && request.status === 200) {

        let answer = JSON.parse(request.responseText);
        let data = answer.data;
        id = answer.id;
        answers = data.answers;
        pollTitle.innerHTML = data.title; ;

        for (const answer of answers) {
            const button = `<button class="poll__answer">${answer}</button>`;
            pollAnswers.insertAdjacentHTML('beforeend', button);
        }

        answers = Array.from(document.querySelectorAll('.poll__answer'));

        answers.forEach(el => {
            el.addEventListener('click', function(event) {
                alert('Спасибо, ваш голос засчитан!');

                let answerIndexOf = answers.indexOf(event.target);
                
                request = new XMLHttpRequest();
                request.open('POST', 'https://netology-slow-rest.herokuapp.com/poll.php');
                request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                request.addEventListener('readystatechange', showStatistics);
                request.send(`vote=${id}&answer=${answerIndexOf}`)

                function showStatistics() {
                    if (request.readyState === 4 && request.status === 200) {

                        answer = JSON.parse(request.responseText);
                        let sumOfVote = 0;
                        answers = answer.stat;

                        answers.forEach(el => {
                            sumOfVote += el.votes;
                        })

                        pollAnswers.innerHTML = `<ul class="votes__percent"></ul>`;

                        let votesPercent = pollAnswers.querySelector('.votes__percent');

                        answers.forEach(el => {
                            votesPercent.innerHTML += `<li>${el.answer}: ${(el.votes / sumOfVote * 100).toFixed(2)}%</li>`; 
                        })
                    }
                }        
            })
        })
    }
}