#!/bin/bash
cd /app/newsaggregator

# Apply database migrations
python manage.py migrate

# Start the Django server
python /app/newsaggregator/manage.py runserver 0.0.0.0:8000
