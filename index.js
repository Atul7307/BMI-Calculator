const form = document.querySelector('form');
console.log(form);
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('.result');

    if(height === '' || height < 0 || isNaN(height) ) {
        result.innerHTML = `Please give a valid height ${height}`;
    }
    else if(weight === '' || weight < 0 || isNaN(weight) ) {
        result.innerHTML = `Please give a valid weightt ${weight}`;
    }
    else{
        var bmi = (weight / ((height * height)  /10000)).toFixed(2);
        result.innerHTML = `<span> Result is ${bmi} </span>`;
    }

    const condition = document.querySelector('.condition');
    if(bmi < 18.6){
        condition.innerHTML = `Under weighted`;
        condition.style.color = 'red'
    }
    else if(bmi >= 18.6 && bmi < 24.9){
        condition.innerHTML = `Normal weighted`;
        condition.style.color = 'green'
    }
    else{
        condition.innerHTML = `Over weighted`;
        condition.style.color = 'red'

    }
});
