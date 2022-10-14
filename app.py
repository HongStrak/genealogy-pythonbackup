from pkgutil import get_data
from fastapi import FastAPI, WebSocket, Request, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from fastapi.responses import HTMLResponse


app = FastAPI()
templates = Jinja2Templates(directory='dist')
app.mount('/static', StaticFiles(directory='./dist/static'), name='dist')
# app.mount('/genealogy-font/static', StaticFiles(directory='./dist/static'), name='static')
global_data = {}


@app.get('/index.html', response_class=HTMLResponse)
async def index(request: Request):
    return templates.TemplateResponse(f'index.html', {'request': request})


@app.get('/all')
def all():
    print('hello')
    return global_data


@app.get('/get_key')
def get(key: str):
    if key not in global_data:
        return 'key err!'
    return global_data[key]


@app.get('/update_key')
def update(key: str, value: str):
    global_data.update({key: value})
    return 'ok'


if __name__ == '__main__':
    uvicorn.run(app, host='0.0.0.0', port=5000)
