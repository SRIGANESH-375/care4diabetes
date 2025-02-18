// Function to show the initial choices after clicking "Click here for Assistance"
function askForAssistance() {
    const chatBox = document.getElementById("chat");
    const conversation = document.getElementById("conversation");

    chatBox.innerHTML = `
        <p><strong>Glucobot:</strong> Please select what you'd like to know more about:</p>
        <button onclick="showSymptoms()">Symptoms</button>
        <button onclick="showDietPlan()">Diet Plan</button>
        <button onclick="showFitnessPlan()">Fitness Plan</button>
        <button onclick="showNormalRanges()">Normal Ranges</button>
        <button onclick="showFAQ()">FAQ</button>
    `;
    conversation.innerHTML = ''; // Clear the start button
}

// Function to show symptoms information
function showSymptoms() {
    const chatBox = document.getElementById("chat");

    chatBox.innerHTML = `
        <p style="color: rgb(145, 201, 231);"><strong>Glucobot:</strong> Are you experiencing any of these symptoms? (Check all that apply)</p>
        <ul style="color: white;">
            <li>Increased thirst</li>
            <li>Frequent urination</li>
            <li>Extreme hunger</li>
            <li>Unexplained weight loss</li>
            <li>Blurred vision</li>
        </ul>
        <button onclick="askForAssistance()" style="font-weight: bold;">Back</button>
    `;
}

// Function to show diet plan information
function showDietPlan() {
    const chatBox = document.getElementById("chat");

    chatBox.innerHTML = `
        <p style="color: rgb(145, 201, 231);"><strong>Glucobot:</strong> Here are some tips for a healthy diet:</p>
        <ul style="color: white;">
            <li>Eat more vegetables (leafy greens, non-starchy vegetables).</li>
            <li>Choose whole grains instead of refined grains (brown rice, quinoa, etc.).</li>
            <li>Include lean protein sources (chicken, turkey, tofu).</li>
            <li>Limit sugar and processed food.</li>
            <li>Control portion sizes and eat regularly.</li>
        </ul>
        <button onclick="askForAssistance()" style="font-weight: bold;">Back</button>
    `;
}

// Function to show fitness plan information
function showFitnessPlan() {
    const chatBox = document.getElementById("chat");

    chatBox.innerHTML = `
        <p style="color: rgb(145, 201, 231);"><strong>Glucobot:</strong> Here are some fitness plan recommendations:</p>
        <ul style="color: white;">
            <li>Aim for at least 30 minutes of moderate exercise daily (walking, cycling, swimming).</li>
            <li>Include strength training exercises (weights, resistance bands) 2-3 times a week.</li>
            <li>Try to increase daily activity (take the stairs, walk after meals).</li>
            <li>Consult a healthcare professional before starting a new exercise plan.</li>
        </ul>
        <button onclick="askForAssistance()" style="font-weight: bold;">Back</button>
    `;
}

// Function to show normal ranges for diabetes
function showNormalRanges() {
    const chatBox = document.getElementById("chat");

    chatBox.innerHTML = `
        <p style="color: rgb(145, 201, 231);"><strong>Glucobot:</strong> Here are the normal ranges for diabetes-related measurements:</p>
        <ul style="color: white;">
            <li><b>Fasting Blood Sugar:</b> 70-99 mg/dL</li>
            <li><b>Post-Meal Blood Sugar:</b> Less than 140 mg/dL (2 hours after eating)</li>
            <li><b>HbA1c:</b> Below 5.7%</li>
        </ul>
        <button onclick="askForAssistance()" style="font-weight: bold;">Back</button>
    `;
}

// Function to show FAQ section
// Function to show FAQ section with added questions
function showFAQ() {
    const chatBox = document.getElementById("chat");

    chatBox.innerHTML = `
        <p style="color: rgb(145, 201, 231);"><strong>Glucobot:</strong> Select a question:</p>
        <select id="faq-select" onchange="showAnswer()" style="color: black;">
            <option value="">--Choose a question--</option>
            <option value="whatIsDiabetes">What is diabetes?</option>
            <option value="typesOfDiabetes">What are the different types of diabetes?</option>
            <option value="symptomsOfDiabetes">What are the symptoms of diabetes?</option>
            <option value="causesOfDiabetes">What causes diabetes?</option>
            <option value="diabetesDiagnosis">How is diabetes diagnosed?</option>
            <option value="canDiabetesBePrevented">Can diabetes be prevented?</option>
            <option value="differenceType1Type2">What is the difference between Type 1 and Type 2 diabetes?</option>
            <option value="riskFactorsType2">What are the risk factors for Type 2 diabetes?</option>
            <option value="diabetesTreatment">How is diabetes treated?</option>
            <option value="insulinImportance">What is insulin and why is it important for diabetes management?</option>
            <option value="manageBloodSugar">How do I manage my blood sugar levels?</option>
            <option value="whatToEatDiabetes">What should I eat if I have diabetes?</option>
            <option value="exerciseHelpDiabetes">Can exercise help manage diabetes?</option>
            <option value="complicationsOfDiabetes">What are the complications of untreated diabetes?</option>
            <option value="diabetesAffectsOrgans">How does diabetes affect other organs and systems in the body?</option>
            <option value="normalLifeWithDiabetes">Can people with diabetes live a normal life?</option>
            <option value="checkBloodSugar">How often should I check my blood sugar levels?</option>
            <option value="A1CLevels">What are A1C levels, and why are they important?</option>
            <option value="DKA">What is diabetic ketoacidosis (DKA)?</option>
            <option value="highLowBloodSugar">How do I know if my blood sugar is too high or too low?</option>
            <option value="mentalHealthDiabetes">Can diabetes affect my mental health?</option>
            <option value="medicationsForDiabetes">What medications are used to treat diabetes?</option>
            <option value="diabetesAndHeartDisease">Can diabetes lead to other health conditions like heart disease?</option>
            <option value="cureForDiabetes">Is there a cure for diabetes?</option>
            <option value="stressManagement">How can I manage stress with diabetes?</option>
            <option value="diabetesPedigree">What is the diabetes pedigree function?</option>
            <option value="insulinDosage">How much insulin should I take for my glucose level?</option>
        </select>
        <div id="answer"></div>
        <button onclick="askForAssistance()" style="font-weight: bold;">Back</button>
    `;
}

// Function to show the selected answer in the FAQ section
function showAnswer() {
    const selectedQuestion = document.getElementById("faq-select").value;
    const answerSection = document.getElementById("answer");

    if (selectedQuestion === "") {
        answerSection.innerHTML = ""; // Clear the answer if no question selected
        return;
    }

    let answer = "";

    switch (selectedQuestion) {
        case "whatIsDiabetes":
            answer = `
                <h3 style="color: white;">What is Diabetes?</h3>
                <p style="color: white;">Diabetes is a chronic medical condition where the body either doesn't produce enough insulin or doesn't use it effectively, leading to high blood sugar levels.</p>
            `;
            break;
        case "typesOfDiabetes":
            answer = `
                <h3 style="color: white;">What are the different types of diabetes?</h3>
                <p style="color: white;">There are three main types of diabetes: Type 1, Type 2, and Gestational Diabetes. Type 1 is an autoimmune condition, Type 2 is a lifestyle-related condition, and Gestational Diabetes occurs during pregnancy.</p>
            `;
            break;
        case "symptomsOfDiabetes":
            answer = `
                <h3 style="color: white;">What are the symptoms of diabetes?</h3>
                <ul style="color: white;">
                    <li>Increased thirst</li>
                    <li>Frequent urination</li>
                    <li>Extreme hunger</li>
                    <li>Unexplained weight loss</li>
                    <li>Blurred vision</li>
                </ul>
            `;
            break;
        case "causesOfDiabetes":
            answer = `
                <h3 style="color: white;">What causes diabetes?</h3>
                <p style="color: white;">The causes of diabetes include genetics, obesity, physical inactivity, and poor diet. In Type 1 diabetes, the immune system mistakenly attacks insulin-producing cells. In Type 2 diabetes, the body becomes resistant to insulin.</p>
            `;
            break;
        case "diabetesDiagnosis":
            answer = `
                <h3 style="color: white;">How is diabetes diagnosed?</h3>
                <p style="color: white;">Diabetes is diagnosed through blood tests, including the fasting blood sugar test, oral glucose tolerance test, or HbA1c test, which measures the average blood sugar over the past 2-3 months.</p>
            `;
            break;
        case "canDiabetesBePrevented":
            answer = `
                <h3 style="color: white;">Can diabetes be prevented?</h3>
                <p style="color: white;">Yes, Type 2 diabetes can often be prevented by maintaining a healthy weight, eating a balanced diet, exercising regularly, and monitoring your blood sugar levels.</p>
            `;
            break;
        case "differenceType1Type2":
            answer = `
                <h3 style="color: white;">What is the difference between Type 1 and Type 2 diabetes?</h3>
                <p style="color: white;">Type 1 diabetes is an autoimmune condition where the body attacks insulin-producing cells, while Type 2 diabetes occurs when the body becomes resistant to insulin.</p>
            `;
            break;
        case "riskFactorsType2":
            answer = `
                <h3 style="color: white;">What are the risk factors for Type 2 diabetes?</h3>
                <ul style="color: white;">
                    <li>Obesity</li>
                    <li>Physical inactivity</li>
                    <li>Family history of diabetes</li>
                    <li>Age over 45</li>
                    <li>High blood pressure</li>
                </ul>
            `;
            break;
        case "diabetesTreatment":
            answer = `
                <h3 style="color: white;">How is diabetes treated?</h3>
                <p style="color: white;">Diabetes treatment includes lifestyle changes (diet and exercise), blood sugar monitoring, and medications such as insulin or oral medications to help manage blood sugar levels.</p>
            `;
            break;
        case "insulinImportance":
            answer = `
                <h3 style="color: white;">What is insulin and why is it important for diabetes management?</h3>
                <p style="color: white;">Insulin is a hormone produced by the pancreas that allows the body to use sugar, starches, and other foods for energy. In diabetes, insulin therapy may be necessary to control blood sugar levels.</p>
            `;
            break;
        case "manageBloodSugar":
            answer = `
                <h3 style="color: white;">How do I manage my blood sugar levels?</h3>
                <p style="color: white;">Managing blood sugar involves eating a healthy diet, exercising regularly, taking prescribed medications, and monitoring blood sugar levels.</p>
            `;
            break;
        case "whatToEatDiabetes":
            answer = `
                <h3 style="color: white;">What should I eat if I have diabetes?</h3>
                <p style="color: white;">If you have diabetes, focus on eating whole grains, lean proteins, non-starchy vegetables, and healthy fats. Limit sugar and refined carbs.</p>
            `;
            break;
        case "exerciseHelpDiabetes":
            answer = `
                <h3 style="color: white;">Can exercise help manage diabetes?</h3>
                <p style="color: white;">Yes, regular exercise helps lower blood sugar, maintain a healthy weight, and improve insulin sensitivity.</p>
            `;
            break;
        case "complicationsOfDiabetes":
            answer = `
                <h3 style="color: white;">What are the complications of untreated diabetes?</h3>
                <p style="color: white;">Untreated diabetes can lead to complications like heart disease, kidney damage, nerve damage, vision problems, and poor wound healing.</p>
            `;
            break;
        case "diabetesAffectsOrgans":
            answer = `
                <h3 style="color: white;">How does diabetes affect other organs and systems in the body?</h3>
                <p style="color: white;">Diabetes can damage blood vessels and nerves, leading to complications in the eyes, kidneys, heart, and digestive system.</p>
            `;
            break;
        case "normalLifeWithDiabetes":
            answer = `
                <h3 style="color: white;">Can people with diabetes live a normal life?</h3>
                <p style="color: white;">Yes, with proper management, people with diabetes can live a full, healthy life.</p>
            `;
            break;
        case "checkBloodSugar":
            answer = `
                <h3 style="color: white;">How often should I check my blood sugar levels?</h3>
                <p style="color: white;">Check your blood sugar levels as recommended by your healthcare provider, typically multiple times a day if you're on insulin.</p>
            `;
            break;
        case "A1CLevels":
            answer = `
                <h3 style="color: white;">What are A1C levels, and why are they important?</h3>
                <p style="color: white;">A1C levels measure the average blood sugar over the past 2-3 months. It helps assess how well diabetes is being managed.</p>
            `;
            break;
        case "DKA":
            answer = `
                <h3 style="color: white;">What is diabetic ketoacidosis (DKA)?</h3>
                <p style="color: white;">DKA is a serious condition where the body produces high levels of ketones, often due to high blood sugar and insufficient insulin.</p>
            `;
            break;
        case "highLowBloodSugar":
            answer = `
                <h3 style="color: white;">How do I know if my blood sugar is too high or too low?</h3>
                <p style="color: white;">High blood sugar symptoms include frequent urination and extreme thirst. Low blood sugar symptoms include sweating, shakiness, and confusion.</p>
            `;
            break;
        case "mentalHealthDiabetes":
            answer = `
                <h3 style="color: white;">Can diabetes affect my mental health?</h3>
                <p style="color: white;">Yes, managing diabetes can lead to stress, anxiety, or depression. It's important to have support and care for your mental well-being.</p>
            `;
            break;
        case "medicationsForDiabetes":
            answer = `
                <h3 style="color: white;">What medications are used to treat diabetes?</h3>
                <p style="color: white;">Medications for diabetes include insulin and oral medications like metformin, sulfonylureas, and GLP-1 agonists.</p>
            `;
            break;
        case "diabetesAndHeartDisease":
            answer = `
                <h3 style="color: white;">Can diabetes lead to other health conditions like heart disease?</h3>
                <p style="color: white;">Yes, diabetes increases the risk of heart disease due to the impact on blood vessels and increased blood sugar levels.</p>
            `;
            break;
        case "cureForDiabetes":
            answer = `
                <h3 style="color: white;">Is there a cure for diabetes?</h3>
                <p style="color: white;">There is currently no cure for diabetes, but it can be managed through lifestyle changes, medications, and blood sugar control.</p>
            `;
            break;
        case "stressManagement":
            answer = `
                <h3 style="color: white;">How can I manage stress with diabetes?</h3>
                <p style="color: white;">Manage stress through relaxation techniques like deep breathing, mindfulness, physical activity, and ensuring proper sleep.</p>
            `;
            break;
        case "diabetesPedigree":
            answer = `
                <h3 style="color: white;">What is the diabetes pedigree function?</h3>
                <p style="color: white;">The diabetes pedigree function is a genetic tool used to assess the likelihood of developing diabetes based on family history.</p>
            `;
            break;
        case "insulinDosage":
            answer = `
                <h3 style="color: white;">How much insulin should I take for my glucose level?</h3>
                <p style="color: white;">Insulin dosage is determined based on individual needs, typically advised by your healthcare provider. It depends on factors like activity levels and meal plans.</p>
            `;
            break;
        default:
            answer = "Please select a valid question.";
            break;
    }

    answerSection.innerHTML = answer;
}
