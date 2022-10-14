from fastapi import FastAPI, WebSocket, Request, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from fastapi.responses import HTMLResponse


app = FastAPI()
# templates = Jinja2Templates(directory='dist')
app.mount('/', StaticFiles(directory='dist'), name='dist')
# app.mount('/genealogy-font/static', StaticFiles(directory='./dist/static'), name='static')


# @app.get('/home', response_class=HTMLResponse)
# async def index(request: Request):
#     return templates.TemplateResponse(f'index.html', {'request': request})


if __name__ == '__main__':
    uvicorn.run(app, host='0.0.0.0', port=5000)
