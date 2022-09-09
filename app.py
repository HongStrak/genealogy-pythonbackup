from fastapi import FastAPI
import uvicorn

app = FastAPI()


@app.get('/hello')
def hello():
    return 'hello, fastapi'


if __name__ == '__main__':
    uvicorn.run(app)
