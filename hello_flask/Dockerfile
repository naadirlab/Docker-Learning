FROM python:3.8-slim        # Base image: lightweight Python 3.8 variant  
WORKDIR /app                # Set WORKDIR
COPY . .                    # Copy the App into the container
RUN pip install flask       # Install flask inside the container
EXPOSE 5002                 # Expose the used port
CMD ["python", "app.py"]    # CMD instruction 
