from fastapi import FastAPI
from app.api.endpoints import receipt
from app.api.endpoints import product

from app.core.config import settings
from app.db.database import engine, Base
# Create database tables
Base.metadata.create_all(bind=engine)

app = FastAPI(title=settings.PROJECT_NAME)

app.include_router(product.router, prefix="/api/v1/products", tags=["products"])
app.include_router(receipt.router, prefix="/api/v1/receipt", tags=["products"])
