const correctAnswer = ['A', 'B', 'C', 'C'];
const form = document.querySelector('.quiz-form');

const result = document.querySelector('.result');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let score = 0;
  // get users answer
  const userAnswer = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];

  // answer check
  userAnswer.forEach((answer, index) => {
    if (answer === correctAnswer[index]) {
      score += 25;
    }
  });

  // console.log(score);

  // scroll top
  scrollTo(0, 0);

  // Removing d-none class
  result.classList.remove('d-none');

  // animating score
  let output = 0;
  const timer = setInterval(() => {
    // showing the % within span
    result.querySelector('span').textContent = `${output}%`;

    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 50);
});
