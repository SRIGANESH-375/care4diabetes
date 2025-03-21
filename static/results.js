document.addEventListener('DOMContentLoaded', function() {
    const formData = JSON.parse(sessionStorage.getItem('formData'));
    const result = JSON.parse(sessionStorage.getItem('predictionResult'));

    if (!formData || !result) {
        alert("No prediction data found. Redirecting to home page.");
        window.location.href = '/';
        return;
    }

    let salutation = formData.gender.toLowerCase() === 'male' ? 'Mr.' : 'Ms.';
    const formattedName = `${salutation} ${formData.name.charAt(0).toUpperCase() + formData.name.slice(1).toLowerCase()}`;
    const gender = formData.gender.charAt(0).toUpperCase() + formData.gender.slice(1).toLowerCase();

    // Populate Patient Information Table
    document.getElementById('patientNameCell').textContent = formattedName;
    document.getElementById('patientAgeCell').textContent = formData.age;
    document.getElementById('patientGenderCell').textContent = gender;

    // Populate Health Parameters Table
    updateResultTable(formData);

    // DOM Elements for results
    const predictionResult = document.getElementById('predictionResult');
    const predictionProbability = document.getElementById('predictionProbability');
    const planContent = document.getElementById('planContent');
    const positiveMessage = document.getElementById('positiveMessage');
    const happyGif = document.getElementById('happyGif');
    const sadGif = document.getElementById('sadGif');
    const goBackButton = document.getElementById('goBackButton');

    happyGif.style.display = 'none';
    sadGif.style.display = 'none';

    let message, fitnessPlan, dietPlan, positiveText;
    
    // Check glucose levels to provide specific recommendations
    let glucoseRecommendations = '';
    if (formData.glucose) {
        const glucoseValue = parseFloat(formData.glucose);
        if (glucoseValue < 70) {
            // Low glucose recommendations
            glucoseRecommendations = `
              <div class="pll">
                <h3 class="plan-title">STEPS TO IMPROVE LOW GLUCOSE LEVELS</h3>
                <div class="plan-content">
                    <p>• Consume Fast-Acting Carbohydrates (15-20 grams) like:</p>
                    <section>
                        <div class="symptoms-grid">
                <div class="symptom-card">
                    <h3>Glucose tablets or gel</h3>
                </div>
                <div class="symptom-card">
                    <h3>½ cup fruit juice or regular soda (not diet)</h3>
                </div>
                <div class="symptom-card">
                    <h3>1 tablespoon honey or sugar</h3>
                </div>
                <div class="symptom-card">
                    <h3>3-4 pieces of hard candy</h3>
                </div>
            </div>
                    <p>• Wait and Recheck – After 15 minutes, check glucose levels again. If still low, repeat step above steps.</p>
                    <p>• Eat a Balanced Snack – After stabilizing, eat a protein + complex carb snack (e.g., peanut butter with crackers) to maintain normal levels.</p>
                    <p>• Identify & Prevent Causes – Avoid skipping meals, over-exercising without eating, excessive insulin, or alcohol consumption.</p>
                    <p>• Consult a Doctor If:

                        <div class="symptoms-grid">
                <div class="symptom-card">
                    <h3>Blood sugar remains low despite taking glucose.</h3>
                </div>
                <div class="symptom-card">
                    <h3>Symptoms like confusion, fainting, or seizures occur.</h3>
                </div>
                <div class="symptom-card">
                    <h3>Frequent hypoglycemia episodes happen.</h3>
                </div>
                </div>
        </section>
                </div>
            </div><br><br>
            `;
        } else if (glucoseValue > 140) {
            // High glucose recommendations
            glucoseRecommendations = `
            <div class="pll">
                <h3 class="plan-title">STEPS TO IMPROVE HIGH GLUCOSE LEVELS</h3>
                <div class="plan-content">
                    <p>• Drink Water – Helps flush out excess glucose through urine.</p>
                    <p>• Engage in Physical Activity – Light exercise (e.g., walking) helps lower sugar. Avoid exercise if glucose is above 250 mg/dL with ketones in urine.</p>
                    <p>• Adjust Diet – Reduce sugary foods, processed carbs, and increase fiber, lean proteins, and healthy fats.</p>
                    <p>• Take Medication as Prescribed – Follow doctor’s advice on insulin or diabetes medications.</p>
                    <p>• High stress raises glucose. Practice meditation, deep breathing, or light yoga.</p>
                    <p>• Monitor Blood Sugar Regularly – Track levels to identify patterns.</p>
                    <p>• Consult a Doctor If:
                    <section>
                        <div class="symptoms-grid">
                <div class="symptom-card">
                    <h3>Blood sugar remains high despite following these steps.</h3>
                </div>
                <div class="symptom-card">
                    <h3>Symptoms like excessive thirst, frequent urination, or fatigue worsen.</h3>
                </div>
                <div class="symptom-card">
                    <h3>You experience ketoacidosis symptoms (nausea, vomiting, fruity breath, confusion).</h3>
                </div>
                </div>
        </section>
                </div>
            </div><br><br>
            `;
        }
    }
    
    if (result.prediction === 1) {
        message = `Dear ${formattedName}, You are suffering from diabetes, Check your results below`;
        sadGif.style.display = 'block';

        fitnessPlan = `
        <div class = "pll">
            <h3 class="pll plan-title">FITNESS PLAN</h3>
            <div class="pll plan-content">
                <p>• Walking: Aim for 30 minutes of brisk walking most days of the week. Walking helps improve insulin sensitivity and maintain blood sugar levels.</p>
                <p>• Low-Impact Aerobics: Engage in low-impact activities like cycling or swimming to enhance cardiovascular health without stressing the joints.</p>
                <p>• Yoga: Practice yoga to improve flexibility, reduce stress, and enhance blood sugar control. Aim for 2-3 sessions per week.</p>
                <p>• Monitoring Blood Sugar: Regularly check blood sugar levels before, during, and after exercise to understand how different activities affect your body.</p>
                <p>• Consult a Professional: Work with a healthcare provider or fitness trainer experienced in diabetes management to create a personalized plan.</p>
            </div>
        </div><br><br>
        `;

        dietPlan = `
        <div class = "pll">
            <h3 class="pll plan-title">DIET PLAN</h3>
            <div class="pll plan-content">
                <p>• Low-Carb Meal Plan: Focus on lean proteins, non-starchy vegetables, and healthy fats. Limit carbs to maintain stable blood sugar.</p>
                <p>• Intermittent Fasting: Consider a pattern like 16/8 (16 hours fasting, 8 hours eating) to improve insulin sensitivity, but consult with a healthcare provider first.</p>
                <p>• Healthy Snacks: Opt for snacks like nuts, seeds, or low-fat cheese to manage hunger and maintain blood sugar levels.</p>
                <p>• Protein-Rich Breakfast: Start the day with eggs or Greek yogurt paired with berries for a balanced meal that stabilizes blood sugar.</p>
                <p>• Mediterranean Diet: Emphasize whole grains, fish, fruits, vegetables, and healthy fats like olive oil. Limit red meat and sweets.</p>
            </div>
        </div>
        `;

        positiveText = "If you follow these steps, you can empower yourself to manage your diabetes effectively and enjoy a healthier, more active lifestyle.";
    } else {
        message = `Dear ${formattedName}, You are free from diabetes, Check your results below`;
        happyGif.style.display = 'block';

        fitnessPlan = `
        <div class = "pll">
            <h3 class="plan-title">FITNESS PLAN</h3>
            <div class="plan-content">
                <p>• Cardiovascular Exercise: Aim for at least 150 minutes of moderate-intensity cardio (e.g., brisk walking, jogging, cycling) per week to improve heart health.</p>
                <p>• Yoga: Include stretching or yoga sessions 2-3 times a week to improve flexibility and reduce injury risk.</p>
                <p>• Daily steps: Aim for 10,000 steps a day by incorporating walking into your daily routine, such as taking the stairs or walking during breaks.</p>
                <p>• Outdoor Activities: Engage in outdoor activities like hiking, cycling, or swimming to stay active while enjoying nature.</p>
                <p>• Rest and Recovery: Allow for adequate rest days and recovery time to prevent burnout and promote long-term fitness.</p>
            </div>
        </div><br><br>
        `;

        dietPlan = `
        <div class = "pll">
            <h3 class="plan-title">DIET PLAN</h3>
            <div class="plan-content">
                <p>• Balanced Diet: Include a variety of food groups: lean proteins, whole grains, healthy fats, fruits, and vegetables for overall health.</p>
                <p>• Paleo Diet: Base meals on whole foods like meat, fish, fruits, vegetables, nuts, and seeds while avoiding processed foods and grains.</p>
                <p>• Ketogenic Diet: Low in carbs and high in healthy fats, promoting fat-burning for energy while maintaining moderate protein intake.</p>
                <p>• Whole30 Diet: A 30-day program emphasizing whole foods, eliminating sugar, grains, dairy, and legumes to reset eating habits.</p>
                <p>• Mindful Eating: Emphasize awareness of hunger and fullness cues, savoring each bite, and avoiding distractions during meals for better digestion and satisfaction.</p>
            </div>
        </div>
        `;

        positiveText = "If you follow these steps, you can enhance your overall health and well-being, paving the way for a vibrant and energetic life.";
    }

    predictionResult.innerHTML = `<strong>${message}</strong>`;
    predictionProbability.textContent = `Probability: ${(result.probability * 100).toFixed(2)}%`;
    
    // Add glucose recommendations if available
    planContent.innerHTML = `${glucoseRecommendations}${fitnessPlan}${dietPlan}`;
    positiveMessage.textContent = positiveText;

    // Go Back Button Functionality (Flask Fix)
    goBackButton.addEventListener('click', function() {
        window.location.href = "/";
    });
});

function updateResultTable(data) {
    const resultTable = document.getElementById('resultTable');
    resultTable.innerHTML = '';

    const referenceRanges = {
        glucose: { min: 70, max: 140, unit: 'mg/dL' },
        bloodPressure: { min: 90, max: 120, unit: 'mmHg' },
        bmi: { min: 18.5, max: 24.9, unit: 'kg/m²' },
        insulin: { min: 12, max: 576, unit: 'pmol/L' }
    };

    for (const [key, value] of Object.entries(data)) {
        if (referenceRanges[key]) {
            const row = document.createElement('tr');
            const range = referenceRanges[key];
            const status = getStatus(parseFloat(value), range.min, range.max);

            row.innerHTML = `
                <td>${key.charAt(0).toUpperCase() + key.slice(1)}</td>
                <td>${value} ${range.unit}</td>
                <td>${range.min} - ${range.max} ${range.unit}</td>
                <td class="${status.toLowerCase()}">${status}</td>
            `;

            resultTable.appendChild(row);
        }
    }
}

function getStatus(value, min, max) {
    if (value < min) return 'Low';
    if (value > max) return 'High';
    return 'Normal';
}
