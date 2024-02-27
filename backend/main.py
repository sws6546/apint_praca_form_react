from typing import Annotated
from fastapi import FastAPI, Form
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI();

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Powiekszenie(BaseModel):
    dictator: str
    size: str

powiekszanieNiemiec = []

@app.get("/")
async def root():
    return {"message": "Siema Niemcu"}

@app.post("/powieksz-niemce")
async def makeGermanyBigger(powiekszenie: Powiekszenie):
    powiekszanieNiemiec.append({"dictator": powiekszenie.dictator, "size": powiekszenie.size})
    return {"message": f"Gratulację powiększenia Niemców o: {powiekszenie.size}"}

@app.get("/historia-powiekszen")
async def returnHistoryOfGermany():
    return powiekszanieNiemiec
