const correctAnswers = ["B", "B", "B", "B"];
const form = document.querySelector(".quiz-form");
const span = document.querySelector("span.text-primary.display-4.p-3");
const result = document.querySelector(".result");
form.addEventListener("submit", e => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value
  ];

  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
      span.innerHTML = `${score}%`;
    }
  });
  result.classList.remove("d-none");
});
