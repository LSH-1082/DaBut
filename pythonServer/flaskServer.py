from flask import Flask, request, render_template
import pandas as pd
import json
app = Flask(__name__)

# !! 주의 route 뒤에 경로는 위에 Spring에서 적은 경로와 같아야함 !!
@app.route('/receive_string', methods=['POST'])
def receive_string():
    #Spring으로부터 JSON 객체를 전달받음
    dto_json = request.get_json()

    #dto_json을 dumps 메서드를 사용하여 response에 저장
    response = json.dumps(dto_json, ensure_ascii=False)
    print("tset")
    print("spring TEST")
    print(dto_json)

    mbti = pd.read_csv('./csv/mbti.csv')
    personality = pd.read_csv('./csv/personality.csv')
    faceShape = pd.read_csv('./csv/face_shape.csv')
    snsFrequency = pd.read_csv('./csv/sns_frequency.csv')
    major = pd.read_csv('./csv/major.csv')
    age = pd.read_csv('./csv/age.csv')

    mainAge = dto_json[0]['age']
    mainFaceShape = dto_json[0]['faceShape']
    mainMbti = dto_json[0]['mbti']
    mainPersonality = dto_json[0]['personality']
    mainSnsFrequency = dto_json[0]['snsFrequency']
    mainMajor = dto_json[0]['major']

    maxSimilarity = 0
    maxUserId = 0
    for a in range(1, len(dto_json)):

        similarity = (mbti.loc[mbti['mbti'] == mainMbti, dto_json[a]['mbti']].values[0]
                      + age.loc[age['age'] == mainAge, str(dto_json[a]['age'])].values[0]
                      + major.loc[major['major'] == mainMajor, dto_json[a]['major']].values[0]
                      + faceShape.loc[faceShape['faceShape'] == mainFaceShape, dto_json[a]['faceShape']].values[0]
                      + personality.loc[personality['personality'] == mainPersonality, dto_json[a]['personality']].values[0]
                      + snsFrequency.loc[snsFrequency['snsFrequency'] == mainSnsFrequency, str(dto_json[a]['snsFrequency'])].values[0])

        if similarity > maxSimilarity:
            maxSimilarity = similarity
            maxUserId = dto_json[a]['userId']
    #Spring으로 response 전달
    return str(maxUserId)

if __name__ == '__main__':
    app.run('0.0.0.0',port=5000,debug=True)