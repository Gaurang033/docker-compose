FROM python:3.6
MAINTAINER Gaurang Shah 'gaurangnshah@gmail.com'
COPY . /app
ENV HOME=/app
WORKDIR /app

RUN pip install -r requirements.txt

EXPOSE 5000 

ENTRYPOINT ["gunicorn", "-b", "0.0.0.0:5001", "-w", "4", "app:app"]
