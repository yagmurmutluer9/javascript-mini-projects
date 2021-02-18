const correctAnswers = ['A', 'A', 'A', 'A'];
const form = document.querySelector('.quiz-form');
const quiz = document.querySelector('.quiz');
const result = document.querySelector('.result');
const startButton = document.querySelector('.start');

startButton.addEventListener('click', () => {
    quiz.classList.remove('d-none');
    result.classList.add('d-none');

});

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    let counter = 0
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 25;
        }
    });
    scrollTo(0, 0);
    quiz.classList.add('d-none');
    result.classList.remove('d-none');
    let timer = setInterval(() => {

        result.querySelector('span').textContent = `${counter}%`;
        if (counter === score) {
            clearInterval(timer);
        }
        counter++;


    }, 10);


});