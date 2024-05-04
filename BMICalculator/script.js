const form = document.querySelector("form");
// const results = document.querySelector("#results");
const value = document.querySelector("#value");
const comment = document.querySelector("#comment");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);

  console.log(height);
  console.log(weight);

  const result = (weight / (height * height)) * 100 * 100;
  console.log(result);
  const val = result.toFixed(2);

  //   results.innerHTML = result.toFixed(2);
  value.innerHTML = `BMI: ${val}`;

  //   const str;
  if (val < 18.6) {
    comment.innerHTML = "Status: Under Weight";
  } else if (val > 18.6 && val < 24.9) {
    comment.innerHTML = "Status: Healthy Weight";
  } else if (val > 24.9) {
    comment.innerHTML = "Status: Over Weight";
  }

  //   comment.innerHTML =
});
