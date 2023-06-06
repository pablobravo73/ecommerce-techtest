# syntax=docker/dockerfile:1.4

# Create image based on the official Node image from dockerhub
FROM node:18-bullseye AS development

# Create app directory
WORKDIR /usr/src/app

# Copy dependency definitions
COPY package.json /usr/src/app
COPY package-lock.json /usr/src/app

# Install dependencies
RUN npm ci

# Get all the code needed to run the app
COPY . /usr/src/app

# Expose the port the app runs in
EXPOSE 5173

# Serve the app
#CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
CMD ["npx", "vite", "--host", "0.0.0.0"]

