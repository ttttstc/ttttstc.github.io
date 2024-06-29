from openai import OpenAI
from flask import jsonify
import httpx

def create_insecure_client():
    """
    创建一个忽略证书验证的 httpx.Client。
    """
    client = httpx.Client(verify=False)
    return client


def chat(user_input):
    client = OpenAI(
        # api_key="XXX",
        # base_url="https://aihubmix.com/v1",
        api_key="sk-KFAYcOqq5iPTOB5yF77b363b97C54c34BaC4045a113559Fc",
        base_url="https://free.gpt.ge/v1/",
        http_client=create_insecure_client()
    )

    response = client.chat.completions.create(
        messages=[
            {
                "role": "user",
                "content": user_input,
            }
        ],
        model="gpt-3.5-turbo",
    )
    # 访问响应数据的正确方式
    if response.choices and len(response.choices) > 0:
        message = response.choices[0].message.content
        print(message)
        return message
    else:
        print("No response from the model.")
        return



# # 以下是之前的聊天程序代码
# def get_user_input():
#     return input("你: ")
#
#
#
# print("AI 聊天机器人已启动，输入 '退出' 结束对话。")
# while True:
#     user_input = get_user_input()
#     if user_input.lower() == '退出':
#         print("会话结束。")
#         break
#     ai_response = chat(user_input)
#     print(f"AI: {ai_response}")