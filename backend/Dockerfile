FROM tiangolo/uwsgi-nginx-flask:python3.8-alpine

ENV LISTEN_PORT 81
EXPOSE 81

RUN pip install flask_cors
RUN pip install peewee

COPY ./backend.py /app/main.py
COPY ./perepiski.json /app/perepiski.json

