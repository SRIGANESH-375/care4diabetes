from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import os
import pandas as pd
import numpy as np
import joblib
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import StandardScaler

app = Flask(__name__)
CORS(app)

# Define paths for model and scaler
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MODEL_PATH = os.path.join(BASE_DIR, 'diabetes_model.pkl')
SCALER_PATH = os.path.join(BASE_DIR, 'scaler.pkl')

# Function to train and save the model if not found
def prepare_model():
    df = pd.read_csv(os.path.join(BASE_DIR, 'diabetes.csv'))  # Ensure this file exists
    
    X = df.drop('Outcome', axis=1)
    y = df['Outcome']

    # Scale the features
    scaler = StandardScaler()
    X_scaled = scaler.fit_transform(X)

    # Train the model
    model = RandomForestClassifier(n_estimators=100, random_state=42)
    model.fit(X_scaled, y)

    # Save model and scaler
    joblib.dump(model, MODEL_PATH)
    joblib.dump(scaler, SCALER_PATH)

    return model, scaler

# Load or train the model
if os.path.exists(MODEL_PATH) and os.path.exists(SCALER_PATH):
    model = joblib.load(MODEL_PATH)
    scaler = joblib.load(SCALER_PATH)
else:
    model, scaler = prepare_model()

# Home Route (Loads `fmp.html` by default)
@app.route('/')
def home():
    return render_template('c4d.html')

# Route for `index.html`
@app.route('/fmp')
def fmp():
    return render_template('fmp.html')

# Route for `index.html`
@app.route('/index')
def index():
    return render_template('index.html')

@app.route('/results')
def results():
    return render_template('results.html')

@app.route('/cb')
def cb():
    return render_template('cb.html')

@app.route('/fitness')
def fitness():
    return render_template('fitness.html')

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json

        # Validate input
        required_fields = ['pregnancies', 'glucose', 'bloodPressure', 'skinThickness', 'insulin', 'bmi', 'diabetesPedigree', 'age']
        if any(field not in data or data[field] == '' for field in required_fields):
            return jsonify({'error': 'Missing or invalid input values'}), 400

        # Convert input data
        input_data = pd.DataFrame({
            'Pregnancies': [float(data['pregnancies'])],
            'Glucose': [float(data['glucose'])],
            'BloodPressure': [float(data['bloodPressure'])],
            'SkinThickness': [float(data['skinThickness'])],
            'Insulin': [float(data['insulin'])],
            'BMI': [float(data['bmi'])],
            'DiabetesPedigreeFunction': [float(data['diabetesPedigree'])],
            'Age': [float(data['age'])]
        })

        # Scale input
        input_scaled = scaler.transform(input_data)

        # Predict
        prediction = model.predict(input_scaled)[0]
        probability = model.predict_proba(input_scaled)[0][1]

        return jsonify({'prediction': int(prediction), 'probability': float(probability)})

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
