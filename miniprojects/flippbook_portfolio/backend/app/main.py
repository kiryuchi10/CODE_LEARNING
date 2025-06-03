# main.py
# FastAPI 진입점 및 API 라우터 정의

from fastapi import FastAPI, Depends,File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from . import models, schemas, crud, database

from fastapi.responses import JSONResponse
import shutil, os


app = FastAPI()

# CORS 설정
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 프론트엔드 도메인 제한 가능
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

models.Base.metadata.create_all(bind=database.engine)

@app.get("/resume", response_model=list[schemas.Resume])
def read_resume(db: Session = Depends(database.get_db)):
    return crud.get_resume(db)

@app.post("/contact", response_model=schemas.Contact)
def submit_contact(form: schemas.ContactCreate, db: Session = Depends(database.get_db)):
    return crud.create_contact(db, form)

@app.post("/upload_file")
def upload_file(file: UploadFile = File(...)):
    file_location = f"app/uploads/{file.filename}"
    with open(file_location, "wb") as f:
        shutil.copyfileobj(file.file, f)
    return JSONResponse(content={"filename": file.filename, "url": file_location})

