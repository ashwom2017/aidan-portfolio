from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Dummy logic — replace this with real pitch prediction logic
@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()
    location = data.get("location")
    pitch_type = data.get("pitch_type")

    # Here you would call the actual model or logic
    prediction = {
        "zone": "Middle Center",
        "type": "Curveball",
        "score": "+5"
    }

    return jsonify(prediction)

@app.route("/", methods=["GET"])
def home():
    return "Backend is running!"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
