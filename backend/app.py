from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return '✅ Backend running!'

@app.route('/simulate_tank', methods=['GET'])
def simulate_tank():
    # Example: return current tank level
    return jsonify({'tank_level': 50})

if __name__ == '__main__':
    app.run(debug=True)
