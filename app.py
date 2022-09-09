# from fastapi import FastAPI
# import uvicorn

# app = FastAPI()


# @app.get('/hello')
# def hello():
#     return 'hello, fastapi'


# if __name__ == '__main__':
#     uvicorn.run(app, host='0.0.0.0', port=8199)

from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
    return 'hello world'
    
if __name__ == '__main__':
    app.run()
 
