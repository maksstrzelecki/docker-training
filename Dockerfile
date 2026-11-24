# Base image
FROM python:3.12-slim

# Set working directory
WORKDIR /app

# Copy application files
COPY requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

COPY main.py .

# Default command
CMD ["python", "main.py"]