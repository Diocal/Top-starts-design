from fastapi import APIRouter, Depends, HTTPException
from app.models.model import LineItemDB, ReceiptDB, MerchantDB, CategoryDB, UserDB, LocaleDB , ProductDB
from app.schema.schem import ReceiptItem
from typing import List
from sqlalchemy.orm import Session
from app.db.database import get_db


router = APIRouter()

@router.get("/receipt-items", response_model=List[ReceiptItem])
def read_receipt_items(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    items = (
        db.query(
            ProductDB.name.label("product"),
            CategoryDB.main_category.label("category"),
            CategoryDB.sub_category.label("subcategory"),
            ProductDB.name.label("productname"),
            MerchantDB.name.label("merchant"),
            LocaleDB.country,
            LocaleDB.currency,
            UserDB.user_id.label("userid")
        )
        .join(LineItemDB, LineItemDB.product_id == ProductDB.product_id)
        .join(ReceiptDB, LineItemDB.receipt_id == ReceiptDB.receipt_id)
        .join(MerchantDB, ReceiptDB.merchant_id == MerchantDB.merchant_id)
        .join(CategoryDB, LineItemDB.category_id == CategoryDB.category_id)
        .join(UserDB, ReceiptDB.user_id == UserDB.user_id)
        .join(LocaleDB, ReceiptDB.locale_id == LocaleDB.locale_id)
        .offset(skip)
        .limit(limit)
        .all()
    )
    
    return [ReceiptItem(**item._asdict()) for item in items]