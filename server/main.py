from flask import Flask, request, jsonify

from youtube import get_video_subtitles
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/get_subtitles')
def get_subtitles():
    video_id = request.args.get('video_id')
    print('video_id:'+video_id)
    subtitle =dict()
    subtitle["language"] = "chinese"
    subtitle["name"] = "aaa"
    subtitles_list = []
    subtitles_list.append(subtitle)
    # subtitles_list = get_video_subtitles(video_id)  # 调用第一步中的函数
    # # 打印字幕列表
    # if subtitles_list:
    #     print('Available subtitles:')
    #     for subtitle in subtitles_list:
    #         print(f'{subtitle["language"]} - {subtitle["name"]}')
    # else:
    #     print('No subtitles found or an error occurred.')
    return jsonify(subtitles_list)

if __name__ == '__main__':
    app.run(debug=False)