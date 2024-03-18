# Use an official Python runtime as a parent image
FROM python:3.10

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

#Exec
# ENTRYPOINT ["python", "manage.py"]
# CMD ["runserver", "0.0.0.0:8000"]