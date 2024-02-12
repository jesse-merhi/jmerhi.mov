# Use an official Node.js runtime as a parent image
FROM node:20

# Set the working directory
WORKDIR /usr/src/app

# Install dependencies, including wget
RUN apt-get update && \
    apt-get install -y wget

# Define the Hugo version

# Download and install Hugo
RUN wget https://github.com/gohugoio/hugo/releases/download/v0.122.0/hugo_extended_0.122.0_linux-arm64.deb && \
    dpkg -i hugo_extended_0.122.0_linux-arm64.deb

# Copy the current directory contents into the container
COPY . .

# Install dependencies in the website directory
RUN cd ./website && npm ci

# Build the Hugo site
RUN cd ./slides && hugo --gc --minify --cleanDestinationDir -d ../website/public/6443/

# Build the website
RUN cd ./website && npm run build --if-present

# Expose the port the http-server runs on
EXPOSE 8080

# Define the command to run http-server
CMD ["npx", "http-server", "./website/dist"]
