FROM python:3.12-slim

WORKDIR /app

COPY app.py .

RUN pip install --no-cache-dir flask requests boto3

EXPOSE 5000

CMD ["python", "app.py"]
