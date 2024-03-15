# Use an official Python runtime as a parent image
FROM python:3.10-alpine

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set the working directory
WORKDIR /backend

# Add the current directory files (on your machine) to the container
ADD . /backend/

# Install dependencies
COPY requirements.txt /backend/
RUN pip install -r requirements.txt

# Copy the project code into the container
COPY . /backend/

VOLUME /backend

# Expose the port server is running on
EXPOSE 8000

# Start the server
CMD python manage.py makemigrations && python manage.py migrate && python manage.py runserver 0.0.0.0:8000
# CMD ["%%CMD%%"]