window.onload = () => {
  const button = document.querySelector('#btn');
  button.addEventListener('click', calculateBmi)
}

function calculateBmi() {
  const height = document.querySelector('#height').value;
  const weight = document.querySelector('#weight').value;
  const result = document.querySelector('#result');

  if (!height || isNaN(height) || height < 0) {
    alert('Please Fill Out The Input Fields!');
    return;
  }

const bmi = (weight / ((height * height) / 10000)).toFixed(2);

  if (bmi < 18.5) {
      result.innerText = `Under Weight: ${bmi}`; 
  } else if (bmi >= 18.5 && bmi <= 25) {
      result.innerText = `Normal: ${bmi}`;
  } else if (bmi >= 25 && bmi <= 30) {
      result.innerText = `Over Weight: ${bmi}`;
  } else if (bmi >= 30 && bmi <= 35) {
      result.innerText = `Obesity (Class I): ${bmi}`;
  } else if (bmi >= 35.5 && bmi <= 40) {
      result.innerText = `Obesity (Class II) : ${bmi}`;
  } else {
      result.innerText = `Extreme Obesity: ${bmi}`;
  }
}
