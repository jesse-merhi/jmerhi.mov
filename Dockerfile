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
COPY ./slides ./slides

# Build the Hugo site
RUN cd ./slides && hugo --gc --minify --cleanDestinationDir -d ../website/static/6443/

FROM oven/bun:latest
WORKDIR /usr/src/app/website
COPY ./website/package.json ./
# Build the website
RUN bun install

COPY ./website ./

RUN bun run build

# Expose the appropriate port
EXPOSE 8080

# Define the command to run serve
CMD ["bun", "run", "dev", "--host", "0.0.0.0", "--port", "8080"]
