from flask import Flask, request, jsonify

from flask_cors import CORS

from server.chat import chat

app = Flask(__name__)
CORS(app)

@app.route('/chat', methods=['POST'])
def chat_with_gpt():
    data = request.get_json()
    user_message = data.get('message')
    print('user_message:' + user_message)
    ai_res = chat(user_message)
    print(ai_res)
    return jsonify({'response': ai_res})


if __name__ == '__main__':
    app.run(debug=False,port=8080)