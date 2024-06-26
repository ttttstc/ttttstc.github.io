from googleapiclient.discovery import build
from google.oauth2 import service_account
from googleapiclient.errors import HttpError

# 配置API密钥
API_KEY = 'AIzaSyAfvTTnbo_Yh1Pqt6ad1Y5psajyMBJceMw'
YOUTUBE_API_SERVICE_NAME = "youtube"
YOUTUBE_API_VERSION = "v3"


# 构建YouTube Data API服务
youtube = build('youtube', 'v3', developerKey=API_KEY)
# # 替换为你的服务账户密钥文件的路径
# SERVICE_ACCOUNT_FILE = r'D:\workspace\3.json'
# # 使用服务账户密钥文件加载凭据
# credentials = service_account.Credentials.from_service_account_file(
#     SERVICE_ACCOUNT_FILE,
#     scopes=['https://www.googleapis.com/auth/youtube.force-ssl']  # 替换为需要的scope
# )
# # 构建YouTube Data API服务
# youtube = build('youtube', 'v3', credentials=credentials)

def get_video_subtitles(video_id, part='snippet'):
    try:
        # 调用captions.list方法获取视频字幕列表
        request = youtube.captions().list(
            part=part,
            videoId=video_id
        )
        response = request.execute()
        subtitles = []
        # 遍历字幕列表并添加到列表中
        for caption in response.get('items', []):
            subtitles.append({
                'language': caption['snippet']['language'],
                'name': caption['snippet']['name']
            })
        return subtitles
    except HttpError as e:
        # 打印HTTP错误信息
        print(f'An HTTP error {e.resp.status} occurred: {e}')
    except Exception as e:
        # 打印其他错误信息
        print(f'An error occurred: {e}')


# 使用函数
# video_id = 'VIDEO_ID'  # 替换为YouTube视频ID
# subtitles = get_video_subtitles(video_id)
# print(subtitles)