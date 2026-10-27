from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="My Portfolio API",
    description="Simple backend for my portfolio website",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=False,
    allow_methods=["GET"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {
        "message": "My Portfolio Backend is running!"
    }


@app.get("/api/hello")
def hello():
    return {
        "success": True,
        "message": "Hello from Python FastAPI!",
        "developer": "Python Backend Developer",
        "technologies": ["Python", "FastAPI", "React"],
    }


@app.get("/health")
def health():
    return {
        "status": "healthy"
    }