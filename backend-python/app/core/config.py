from pydantic_settings import BaseSettings
from typing import Any, Dict

class Settings(BaseSettings):
    PROJECT_NAME: str
    DATABASE_URL: str
    SUPABASE_URL: str
    SUPABASE_KEY: str

    class Config:
        env_file = ".env"

    def __init__(self, **values: Any):
        super().__init__(**values)
        self.print_env_variables()

    def print_env_variables(self):
        print("Environment Variables:")
        for key, value in self.model_dump().items():
            # Mask sensitive information
            if 'KEY' in key or 'PASSWORD' in key or 'URL' in key:
                value = f"{value[:5]}...{value[-5:]}" if value else None
            print(f"  {key}: {value}")


settings = Settings()
