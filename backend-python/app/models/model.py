from sqlalchemy import Column, Integer, String, TIMESTAMP, Numeric, Text, ForeignKey, UniqueConstraint
from sqlalchemy.orm import relationship
from app.db.database import Base


class ProductDB(Base):
    __tablename__ = "products"
    product_id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True, index=True)

class CategoryDB(Base):
    __tablename__ = 'categories'

    category_id = Column(Integer, primary_key=True, index=True)
    main_category = Column(String(50), nullable=False)
    sub_category = Column(String(50), nullable=False)

    __table_args__ = (UniqueConstraint('main_category', 'sub_category', name='uq_main_sub_category'),)

class UserDB(Base):
    __tablename__ = 'users'

    user_id = Column(Integer, primary_key=True, index=True)
    username = Column(String(50), unique=True)
    email = Column(String(255), unique=True)
    created_at = Column(TIMESTAMP(timezone=True), server_default='CURRENT_TIMESTAMP')
    
    # # Additional fields (not in original schema, but mentioned in the query)
    # income = Column(String)
    # age = Column(String)

class MerchantDB(Base):
    __tablename__ = 'merchants'

    merchant_id = Column(Integer, primary_key=True, index=True)
    name = Column(String(255), unique=True, nullable=False)
    address = Column(Text)

class LocaleDB(Base):
    __tablename__ = 'locales'

    locale_id = Column(Integer, primary_key=True, index=True)
    language = Column(String(10), nullable=False)
    country = Column(String(10), nullable=False)
    currency = Column(String(10), nullable=False)

    __table_args__ = (UniqueConstraint('language', 'country', 'currency', name='uq_language_country_currency'),)

class ReceiptDB(Base):
    __tablename__ = 'receipts'

    receipt_id = Column(Integer, primary_key=True, index=True)
    receipt_number = Column(String(50), unique=True)
    merchant_id = Column(Integer, ForeignKey('merchants.merchant_id'), nullable=False)
    user_id = Column(Integer, ForeignKey('users.user_id'), nullable=False)
    original_category = Column(String(50), nullable=False)
    date = Column(TIMESTAMP, nullable=False)
    total_price = Column(Numeric(10, 2), nullable=False)
    tax_and_serv = Column(Numeric(10, 2), nullable=False)
    currency = Column(String(3), nullable=False)
    description = Column(Text)
    source = Column(String(50))
    locale_id = Column(Integer, ForeignKey('locales.locale_id'), nullable=False)

    merchant = relationship("MerchantDB")
    user = relationship("UserDB")
    locale = relationship("LocaleDB")

class LineItemDB(Base):
    __tablename__ = 'line_items'

    line_item_id = Column(Integer, primary_key=True, index=True)
    receipt_id = Column(Integer, ForeignKey('receipts.receipt_id'), nullable=False)
    product_id = Column(Integer, ForeignKey('products.product_id'), nullable=False)
    item_price = Column(Numeric(10, 2), nullable=False)
    original_category = Column(String(50), nullable=False)
    category_id = Column(Integer, ForeignKey('categories.category_id'))
    quantity = Column(Integer, nullable=False)
    total_price = Column(Numeric(10, 2), nullable=False)

    receipt = relationship("ReceiptDB")
    product = relationship("ProductDB")
    category = relationship("CategoryDB")
