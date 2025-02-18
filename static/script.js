document.getElementById('gender').addEventListener('change', function() {
    const pregnancyField = document.getElementById('pregnancyField');
    const pregnanciesInput = document.getElementById('pregnancies');
    
    if (this.value === 'female') {
        pregnancyField.style.display = 'flex';
    } else {
        pregnancyField.style.display = 'none';
        pregnanciesInput.value = '0'; // Reset pregnancy value for male
    }
});

document.getElementById('predictionForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const userData = {
        name: document.getElementById('name').value,
        age: document.getElementById('age').value,
        gender: document.getElementById('gender').value,
        pregnancies: document.getElementById('pregnancies').value || 0,
        glucose: document.getElementById('glucose').value,
        bloodPressure: document.getElementById('bloodPressure').value,
        skinThickness: document.getElementById('skinThickness').value,
        insulin: document.getElementById('insulin').value,
        bmi: document.getElementById('bmi').value,
        diabetesPedigree: document.getElementById('diabetesPedigree').value
    };

    // Validate input fields
    if (!userData.glucose || !userData.bmi || !userData.insulin) {
        alert("Please fill all required fields!");
        return;
    }

    try {
        sessionStorage.setItem('formData', JSON.stringify(userData)); // Store form data

        const response = await fetch('/predict', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        });

        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const result = await response.json();
        sessionStorage.setItem('predictionResult', JSON.stringify(result)); // Store prediction

        window.location.href = '/results'; // Redirect to results page
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while making the prediction. Please try again.');
    }
});
