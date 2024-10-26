from pydantic import BaseModel

class Product(BaseModel):
    product_id: int
    name: str

    class Config:
        from_attributes = True

class ReceiptItem(BaseModel):
    product: str
    category: str
    subcategory: str
    productname: str
    merchant: str
    country: str
    currency: str
    userid: int
    income: str = "0"
    age: str = "0"

    class Config:
        from_attributes = True