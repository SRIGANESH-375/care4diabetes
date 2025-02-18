function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100;
    
    if (weight && height) {
        const bmi = weight / (height * height);
        let category = '';
        
        if (bmi < 18.5) category = 'Underweight';
        else if (bmi < 25) category = 'Normal weight';
        else if (bmi < 30) category = 'Overweight';
        else category = 'Obesity';
        
        document.getElementById('bmiResult').innerHTML = 
            `Your BMI is ${bmi.toFixed(1)} (${category})`;
    }
}

function calculatePedigree() {
    const relatives = parseFloat(document.getElementById('relativesWithDiabetes').value);
    const age = parseFloat(document.getElementById('ageOfOnset').value);
    
    if (relatives && age) {
        const pedigree = (relatives * 0.1) + (50/age);
        
        document.getElementById('pedigreeResult').innerHTML = 
            `Your Diabetes Pedigree Function value is ${pedigree.toFixed(3)}`;
    }
}