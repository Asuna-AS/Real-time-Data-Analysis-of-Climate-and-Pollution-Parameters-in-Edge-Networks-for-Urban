import numpy as np
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import pandas as pd
import pickle
import json
from sklearn.preprocessing import LabelEncoder

df=pd.read_csv("air_dataset.csv")
df=df.drop(['station','date', 'time','NH3'],axis=1)
df['PM2.5'].fillna(df['PM2.5'].mean(), inplace=True)
df['PM10'].fillna(df['PM10'].mean(), inplace=True)
df['NO2'].fillna(df['NO2'].mean(), inplace=True)
df['SO2'].fillna(df['SO2'].mean(), inplace=True)
df['CO'].fillna(df['CO'].mean(), inplace=True)
df['OZONE'].fillna(df['OZONE'].mean(), inplace=True)
df['AQI'].fillna(df['AQI'].mean(), inplace=True)
df['Predominant_Parameter'].fillna(df['Predominant_Parameter'].mode()[0], inplace=True)

label_encoder = LabelEncoder()
df['Encoded_Parameter'] = label_encoder.fit_transform(df['Predominant_Parameter'])


app = Flask(__name__)
CORS(app, support_credentials=True)
model = pickle.load(open('rf_model.pkl','rb'))
aqimodel = pickle.load(open('aqimodel.pkl','rb'))

# most cautious gas prediction API endpoint
@app.route('/predict',methods=['POST'])
@cross_origin(supports_credentials=True)
def predict():
    data = request.get_json(force=True)
    # print(data)
    int_features = [float(x) for x in data.values()]
    final_features = np.array(int_features)
    # print(final_features)
    res = model.predict([final_features])
    if(res==0):
        r = {"result" :  'Predominant Parameter is CO'}
        response = jsonify(r)
        return response
    if(res==1):
        r = {"result" :  'Predominant Parameter is NO2'}
        response = jsonify(r)
        return response 
    if(res==2):
        r = {"result" :  'Predominant Parameter is Ozone'}
        response = jsonify(r)
        return response
    if(res==3):
        r = {"result" :  'Predominant Parameter is PM10'}
        response = jsonify(r)
        return response
    if(res==4):
        r = {"result" :  'Predominant Parameter is PM2.5'}
        response = jsonify(r)
        return response

# Aqi prediction API endpoint
@app.route('/aqi',methods=['POST'])
@cross_origin(supports_credentials=True)
def predict2():
    data = request.get_json(force=True)
    # print(data)
    ud = pd.DataFrame([{'state':data['state'],'city': data['city'], 'PM2.5':data['pm2'], 'PM10':data['pm10'], 'NO2':data['no2'], 'SO2':data['so2'], 'CO':data['co'], 'OZONE':data['ozone']}])
    res = aqimodel.predict(ud)
    # print(res)
    r = {"result" : float(res)}
    response = jsonify(r)
    return response

# gas level prediction API endpoint
@app.route('/gasLevels',methods=['POST'])
@cross_origin(supports_credentials=True)
def predict3():
    data = request.get_json(force=True)
    print(data)
    print(78)
    state=data['state']
    gasses = [(key, value) for key, value in data.items() if key != 'state']
    ans={}
    print(gasses)
    print("########################")
    for gase in gasses:
        print(".....................debiuugber")
        gas=gase[0]
        con=gase[1]
        filtered_df = df[df['state'] == state]
        res=""
        if not filtered_df.empty:
            mean_gas = filtered_df[gas].mean()
            if con < mean_gas - 1:
                res+="Gas is not Hazardous"
                ans[gas]=(1)
            elif mean_gas - 1 <= con <= mean_gas:
                res+="Gas is Moderate"
                ans[gas]=(2)
            elif con > mean_gas :
                res+="Gas is Dangerous"
                ans[gas]=(3)
        else:
            res=res+"No state found in database"
            ans[gas]=(4)
    r = {"result" : ans}   
    response = jsonify(r)
    return response



if __name__ == '__main__':
    app.run(port=5000, debug=True)

