

const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault()

const weight = document.querySelector('#weight').value;
const height = document.querySelector('#height').value;

if((height=== '') || (height<0) || (isNaN(height))) {
    results.innerHTML = "Please input your human height";
} else if(weight === '' || weight <0 || isNaN(weight)) {
    results.innerHTML = "Please input your fat ass weight";
} else {
    const bmi = ((weight)/((height*height)/10000)).toFixed(2);

    if(bmi<18.5) {
        results.innerHTML = `<span>Your BMI is ${bmi} and You are in Sıska  group. Approximately you need to gain 
        ${-((bmi-24.9)*(height*height/10000)).toFixed(2)} weight.</span>`;
    } else if(bmi>18.5 && bmi<24.9) {
        results.innerHTML = `<span>Your BMI is ${bmi} and You are perfectly fit.(Nice Job in life.)</span>`;
    } else if(bmi>24.9 && bmi<29.9){
        results.innerHTML = `<span>Your BMI is ${bmi} and You need to lose some weight for more pretty life. Approximately you need to lose 
        ${((bmi-24.9)*(height*height/10000)).toFixed(2)} weight. </span>`;
    } else if(bmi>29.9 && bmi<39.9){
        results.innerHTML = `<span>Your BMI is ${bmi} and You are a fucking fat asssssss. Approximately you need to lose 
        ${((bmi-24.9)*(height*height/10000)).toFixed(2)} weight.</span>`;
    } else if(bmi>39.9){
        results.innerHTML = `<span>Your BMI is ${bmi} and wanna ask you How many orphan's food did you eat? Approximately you need to lose 
        ${((bmi-24.9)*(height*height/10000)).toFixed(2)} weight.</span>`;
    }


    
}
});